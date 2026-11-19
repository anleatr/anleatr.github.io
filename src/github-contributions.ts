import { parse, type DefaultTreeAdapterTypes } from 'parse5';
import { GITHUB_URL } from './consts.js';

type Node = DefaultTreeAdapterTypes.Node;
type Element = DefaultTreeAdapterTypes.Element;

function* elements(node: Node): Generator<Element> {
	if ('attrs' in node) yield node;
	if ('childNodes' in node) {
		for (const child of node.childNodes) yield* elements(child);
	}
}

function text(node: Node): string {
	if ('value' in node) return node.value;
	return 'childNodes' in node ? node.childNodes.map(text).join('') : '';
}

const attr = (element: Element, name: string) => element.attrs.find((attribute) => attribute.name === name)?.value;
const dateLabel = (date: Date) => date.toISOString().slice(0, 10);

export async function getGitHubContributions() {
	const profile = new URL(GITHUB_URL);
	const calendar = new URL(`/users${profile.pathname.replace(/\/$/, '')}/contributions`, profile);
	const response = await fetch(calendar, {
		headers: { Accept: 'text/html', 'Accept-Language': 'en-US' },
		cache: 'no-store',
		signal: AbortSignal.timeout(15_000),
	});
	if (!response.ok) throw new Error(`GitHub contribution calendar returned HTTP ${response.status}`);

	const nodes = [...elements(parse(await response.text()))];
	const labels = new Map(nodes.filter((node) => node.tagName === 'tool-tip')
		.map((node) => [attr(node, 'for'), text(node).trim()]));
	const days = nodes.filter((node) => node.tagName === 'td' && attr(node, 'data-date')).map((cell) => {
		const label = attr(cell, 'data-date')!;
		const date = new Date(`${label}T00:00:00Z`);
		const level = attr(cell, 'data-level') ?? '';
		const match = /^(No|[\d,]+)\s+contributions?\s+on\b/.exec(labels.get(attr(cell, 'id')) ?? '');
		if (!match || !/^[0-4]$/.test(level) || !Number.isFinite(date.valueOf()) || dateLabel(date) !== label) {
			throw new Error(`Invalid GitHub contribution entry for ${label}`);
		}
		const count = match[1] === 'No' ? 0 : Number(match[1].replaceAll(',', ''));
		if (!Number.isSafeInteger(count) || (count === 0) !== (level === '0')) {
			throw new Error(`Invalid GitHub contribution count for ${label}`);
		}
		return { date, count, level: Number(level) };
	}).sort((a, b) => a.date.valueOf() - b.date.valueOf());

	if (days.length < 365 || days.some(({ date }, index) => date.valueOf() - days[0].date.valueOf() !== index * 86_400_000)) {
		throw new Error('GitHub did not return a complete contribution calendar');
	}

	console.info(`[contributions] Loaded ${days.length} days from GitHub (${dateLabel(days[0].date)} to ${dateLabel(days[days.length - 1].date)})`);
	return days;
}
