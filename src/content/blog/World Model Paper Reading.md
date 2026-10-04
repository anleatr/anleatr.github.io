---
title: World Model Paper Reading
description: 记录读论文过程中的一些思考
pubDate: 2026-10-02T13:59+08:00
updatedDate: 2026-10-03T16:57+08:00
---
一些共同的痛点：
- 如何持续生成长视频并缓解累积漂移？
- 交互性
- 实时

## WorldCrafter: Consistent Video World Model with Implicit 3D-aware Memory, Tencent

[![arXiv](https://img.shields.io/badge/arXiv-2609.24984-b31b1b?style=flat-square)](https://arxiv.org/abs/2609.24984) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://drexubery.github.io/WorldCrafter/) [![Code](https://img.shields.io/github/stars/TencentARC/WorldCrafter?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/TencentARC/WorldCrafter)

如何保存记忆：
如何生成：
## LingBot-World: Advancing Open-source World Models, Robbyant

[![arXiv](https://img.shields.io/badge/arXiv-2601.20540-b31b1b?style=flat-square)](https://arxiv.org/abs/2601.20540) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://technology.robbyant.com/lingbot-world) [![Code](https://img.shields.io/github/stars/robbyant/lingbot-world?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/robbyant/lingbot-world)

数据pipeline
self-rollout
## LingBot-World 2.0: Infinite Worlds with Versatile Interactions, Robbyant

[![arXiv](https://img.shields.io/badge/arXiv-2607.07534-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.07534) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://technology.robbyant.com/lingbot-world-v2) [![Code](https://img.shields.io/github/stars/robbyant/lingbot-world-v2?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/robbyant/lingbot-world-v2)

一个自回归模型，预训练：同时进行自回归训练和双向视频训练，前者为了训练模型的指令遵循能力，后者为了训练模型的整段视频生成合理性，作为正则化。两部分共享模型参数，但通过MoBA进行注意力隔离，

后训练：在长 self-rollout 轨迹上使用 **DMD 蒸馏损失**，
## DreamX-World 1.0: A General-Purpose Interactive World Model, 高德

[![arXiv](https://img.shields.io/badge/arXiv-2606.16993-b31b1b?style=flat-square)](https://arxiv.org/abs/2606.16993) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://amap-ml.github.io/DreamX_World/) [![Code](https://img.shields.io/github/stars/AMAP-ML/DreamX-World?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/AMAP-ML/DreamX-World)


## Alaya-EVOKE: From Linear-Scaling Supervision to Endless World, Alaya Lab

[![arXiv](https://img.shields.io/badge/arXiv-2608.13546-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.13546) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://evoke-world.github.io/Evoke/) [![Code](https://img.shields.io/github/stars/AlayaLab/Evoke?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/AlayaLab/Evoke)


## HY-WorldPlay: Towards Long-Term Geometric Consistency for Real-Time Interactive World Modeling, Tencent

[![arXiv](https://img.shields.io/badge/arXiv-2512.14614-b31b1b?style=flat-square)](https://arxiv.org/abs/2512.14614) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://3d-models.hunyuan.tencent.com/world/) [![Code](https://img.shields.io/github/stars/Tencent-Hunyuan/HY-WorldPlay?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Tencent-Hunyuan/HY-WorldPlay)


## Lyra 2.0: Explorable Generative 3D Worlds, NVIDIA

[![arXiv](https://img.shields.io/badge/arXiv-2604.13036-b31b1b?style=flat-square)](https://arxiv.org/abs/2604.13036) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://nv-tlabs.github.io/Project-Lyra/) [![Code](https://img.shields.io/github/stars/nv-tlabs/lyra?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/nv-tlabs/lyra/tree/main/Lyra-2)


## EchoWM: Open and Enterable Omnimodal World Models, 京东

[![arXiv](https://img.shields.io/badge/arXiv-2608.23189-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.23189) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/wm/) [![Code](https://img.shields.io/github/stars/jd-opensource/JoyAI-Echo?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/jd-opensource/JoyAI-Echo)


## Matrix-Game 3.5: Enhancing Real-Time Streaming Interactive World Models with Patch Memory, Riemann Dynamics

[![arXiv](https://img.shields.io/badge/arXiv-2608.29910-b31b1b?style=flat-square)](https://arxiv.org/abs/2608.29910) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://matrix-game-v3-5.github.io/) [![Code](https://img.shields.io/github/stars/Riemann-Dynamics/Matrix-Game-3.5?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Riemann-Dynamics/Matrix-Game-3.5)


## SANA-WM: Efficient Minute-Scale World Modeling with Hybrid Linear Diffusion Transformer, NVIDIA

[![arXiv](https://img.shields.io/badge/arXiv-2605.15178-b31b1b?style=flat-square)](https://arxiv.org/abs/2605.15178) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://nvlabs.github.io/Sana/WM/) [![Code](https://img.shields.io/github/stars/NVlabs/Sana?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/NVlabs/Sana)


