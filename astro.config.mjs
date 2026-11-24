// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import { remarkMark } from 'remark-mark-highlight';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';

/** @type {import('unified').Plugin<[], import('hast').Root>} */
const rehypeImageWidth = () => (tree) => {
	visit(tree, 'element', ({ tagName, properties }) => {
		if (tagName !== 'img' || typeof properties.alt !== 'string' || properties.width != null || properties.style != null) return;
		if (/^(?:https?:)?\/\/img\.shields\.io\//i.test(String(properties.src))) return;
		// Obsidian stores the requested width as either "420" or "description|420".
		const size = /^(?:(.*)\|)?([1-9]\d*)$/.exec(properties.alt);
		if (!size) return;
		properties.alt = (size[1] ?? '').trim();
		properties.width = Number(size[2]);
	});
};

const highlightColors = new Map([
	['🔴', 'red'], ['🟥', 'red'],
	['🟠', 'orange'], ['🟧', 'orange'],
	['🟡', 'yellow'], ['🟨', 'yellow'],
	['🟢', 'green'], ['🟩', 'green'],
	['🔵', 'blue'], ['🟦', 'blue'],
	['🟣', 'purple'], ['🟪', 'purple'],
]);

/** @type {import('unified').Plugin<[], import('hast').Root>} */
const rehypeHighlightColor = () => (tree) => {
	visit(tree, 'element', (node) => {
		const first = node.children[0];
		if (node.tagName !== 'mark' || first?.type !== 'text') return;
		const [marker] = first.value;
		const color = highlightColors.get(marker);
		if (!color) return;
		node.properties.dataHighlight = color;
		first.value = first.value.slice(marker.length);
	});
};

// https://astro.build/config
export default defineConfig({
	site: 'https://anleatr.github.io',
	prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
	markdown: {
		remarkPlugins: [remarkMath, remarkMark],
		rehypePlugins: [rehypeImageWidth, rehypeHighlightColor, rehypeKatex],
	},
	integrations: [mdx(), sitemap()],
});
