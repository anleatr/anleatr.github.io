---
title: World Model Paper Reading
description: 记录读论文过程中的一些思考
imageFolder: world-model-paper-reading
pubDate: 2026-10-02T13:59+08:00
updatedDate: 2026-10-03T16:57+08:00
---
一些共同的痛点：
- 如何持续生成长视频并缓解累积漂移？
- 交互性
- 实时

<a class="paper-title" id="worldcrafter-consistent-video-world-model-with-implicit-3d-aware-memory-tencent" href="https://arxiv.org/abs/2609.24984"><strong>WorldCrafter</strong></a> · Tencent

[![arXiv](https://img.shields.io/badge/arXiv-2609.24984-b31b1b?style=flat-square)](https://arxiv.org/abs/2609.24984) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://drexubery.github.io/WorldCrafter/) [![Code](https://img.shields.io/github/stars/TencentARC/WorldCrafter?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/TencentARC/WorldCrafter)

如何保存记忆：
如何生成：

<a class="paper-title" id="lingbot-world-advancing-open-source-world-models-robbyant" href="https://arxiv.org/abs/2601.20540"><strong>LingBot-World</strong></a> · Robbyant

[![arXiv](https://img.shields.io/badge/arXiv-2601.20540-b31b1b?style=flat-square)](https://arxiv.org/abs/2601.20540) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://technology.robbyant.com/lingbot-world) [![Code](https://img.shields.io/github/stars/robbyant/lingbot-world?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/robbyant/lingbot-world)

数据pipeline
self-rollout

<a class="paper-title" id="lingbot-world-20-infinite-worlds-with-versatile-interactions-robbyant" href="https://arxiv.org/abs/2607.07534"><strong>LingBot-World 2.0</strong></a> · Robbyant

[![arXiv](https://img.shields.io/badge/arXiv-2607.07534-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.07534) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://technology.robbyant.com/lingbot-world-v2) [![Code](https://img.shields.io/github/stars/robbyant/lingbot-world-v2?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/robbyant/lingbot-world-v2)

一个自回归模型，预训练：同时进行自回归训练和双向视频训练，前者为了训练模型的指令遵循能力，后者为了训练模型的整段视频生成合理性，作为正则化。两部分共享模型参数，但通过MoBA进行注意力隔离，

后训练：在长 self-rollout 轨迹上使用 **DMD 蒸馏损失**，

<a class="paper-title" id="dreamx-world-10-a-general-purpose-interactive-world-model-高德" href="https://arxiv.org/abs/2606.16993"><strong>DreamX-World 1.0</strong></a> · 高德

[![arXiv](https://img.shields.io/badge/arXiv-2606.16993-b31b1b?style=flat-square)](https://arxiv.org/abs/2606.16993) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://amap-ml.github.io/DreamX_World/) [![Code](https://img.shields.io/github/stars/AMAP-ML/DreamX-World?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/AMAP-ML/DreamX-World)


<a class="paper-title" id="alaya-evoke-from-linear-scaling-supervision-to-endless-world-alaya-lab" href="https://arxiv.org/abs/2608.13546"><strong>Alaya-EVOKE</strong></a> · Alaya Lab

[![arXiv](https://img.shields.io/badge/arXiv-2608.13546-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.13546) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://evoke-world.github.io/Evoke/) [![Code](https://img.shields.io/github/stars/AlayaLab/Evoke?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/AlayaLab/Evoke)


<a class="paper-title" id="hy-worldplay-towards-long-term-geometric-consistency-for-real-time-interactive-world-modeling-tencent" href="https://arxiv.org/abs/2512.14614"><strong>HY-WorldPlay</strong></a> · Tencent

[![arXiv](https://img.shields.io/badge/arXiv-2512.14614-b31b1b?style=flat-square)](https://arxiv.org/abs/2512.14614) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://3d-models.hunyuan.tencent.com/world/) [![Code](https://img.shields.io/github/stars/Tencent-Hunyuan/HY-WorldPlay?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Tencent-Hunyuan/HY-WorldPlay)


<a class="paper-title" id="lyra-20-explorable-generative-3d-worlds-nvidia" href="https://arxiv.org/abs/2604.13036"><strong>Lyra 2.0</strong></a> · NVIDIA

[![arXiv](https://img.shields.io/badge/arXiv-2604.13036-b31b1b?style=flat-square)](https://arxiv.org/abs/2604.13036) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://nv-tlabs.github.io/Project-Lyra/) [![Code](https://img.shields.io/github/stars/nv-tlabs/lyra?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/nv-tlabs/lyra/tree/main/Lyra-2)


<a class="paper-title" id="echowm-open-and-enterable-omnimodal-world-models-京东" href="https://arxiv.org/abs/2608.23189"><strong>EchoWM</strong></a> · 京东

[![arXiv](https://img.shields.io/badge/arXiv-2608.23189-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.23189) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/wm/) [![Code](https://img.shields.io/github/stars/jd-opensource/JoyAI-Echo?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/jd-opensource/JoyAI-Echo)


<a class="paper-title" id="matrix-game-35-enhancing-real-time-streaming-interactive-world-models-with-patch-memory-riemann-dynamics" href="https://arxiv.org/abs/2608.29910"><strong>Matrix-Game 3.5</strong></a> · Riemann Dynamics

[![arXiv](https://img.shields.io/badge/arXiv-2608.29910-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.29910) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://matrix-game-v3-5.github.io/) [![Code](https://img.shields.io/github/stars/Riemann-Dynamics/Matrix-Game-3.5?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Riemann-Dynamics/Matrix-Game-3.5)


<a class="paper-title" id="sana-wm-efficient-minute-scale-world-modeling-with-hybrid-linear-diffusion-transformer-nvidia" href="https://arxiv.org/abs/2605.15178"><strong>SANA-WM</strong></a> · NVIDIA

[![arXiv](https://img.shields.io/badge/arXiv-2605.15178-b31b1b?style=flat-square)](https://arxiv.org/abs/2605.15178) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://nvlabs.github.io/Sana/WM/) [![Code](https://img.shields.io/github/stars/NVlabs/Sana?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/NVlabs/Sana)


