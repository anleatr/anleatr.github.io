<%*
const values = await new Promise((resolve) => {
	class PaperEntryModal extends tp.obsidian.Modal {
		constructor() {
			super(app);
			this.values = null;
		}
		onOpen() {
			this.contentEl.createEl("h2", { text: "插入论文" });
			const form = this.contentEl.createEl("form");
			form.style.cssText = "display:grid;gap:16px";
			const fields = [
				["shortName", "方法简称", "例如 OmniNWM", true],
				["arxivInput", "arXiv ID 或完整 URL", "2606.16993 或 https://arxiv.org/abs/2606.16993", true],
				["project", "项目主页（可留空）", "https://…", false],
				["repoInput", "GitHub 仓库名或完整 URL（可留空）", "AMAP-ML/DreamX-World 或 https://github.com/…", false],
			];
			for (const [name, text, placeholder, required] of fields) {
				const label = form.createEl("label");
				label.style.cssText = "display:grid;gap:6px";
				label.createEl("span", { text });
				const input = label.createEl("input", { type: "text", placeholder });
				input.name = name;
				input.required = required;
				input.style.width = "100%";
			}
			const actions = form.createDiv();
			actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px";
			actions.createEl("button", { text: "取消", type: "button" }).addEventListener("click", () => this.close());
			actions.createEl("button", { text: "插入", type: "submit", cls: "mod-cta" });
			form.addEventListener("submit", (event) => {
				event.preventDefault();
				for (const input of form.querySelectorAll("input")) {
					input.value = input.value.trim();
				}
				if (!form.reportValidity()) return;
				this.values = Object.fromEntries(new FormData(form));
				this.close();
			});
			form.querySelector("input").focus();
		}
		onClose() {
			this.contentEl.empty();
			resolve(this.values);
		}
	}
	new PaperEntryModal().open();
});
if (values === null) return;
const { shortName, arxivInput, project, repoInput } = values;

const arxiv = arxivInput
	.trim()
	.replace(/^https?:\/\/(?:www\.)?arxiv\.org\/abs\//, "")
	.replace(/\/$/, "");
const repo = repoInput
	.trim()
	.replace(/^https?:\/\/(?:www\.)?github\.com\//, "")
	.replace(/\/$/, "")
	.replace(/\.git$/, "");
const badges = [
	`[![arXiv](https://img.shields.io/badge/arXiv-${arxiv}-b31b1b?style=flat-square)](https://arxiv.org/abs/${arxiv})`,
	project
		? `[![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](${project})`
		: "",
	repo
		? `[![Code](https://img.shields.io/github/stars/${repo}?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/${repo})`
		: "",
].filter(Boolean).join(" ");

const html = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
tR += `

<a class="paper-title" href="https://arxiv.org/abs/${html(arxiv)}"><strong>${html(shortName)}</strong></a>

${badges}

`;
%>
