<%*
const title = await tp.system.prompt("论文标题", "", true);
const arxivInput = await tp.system.prompt("arXiv ID 或完整 URL", "", true);
const project = await tp.system.prompt("项目主页 URL，没有则留空", "", true);
const repoInput = await tp.system.prompt("GitHub 仓库名或完整 URL，没有则留空", "", true);

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

tR += `## ${title}

${badges}

`;
%>
