---
title: 相机可控的Image2Video方法
description: 梳理近期读到的camera control I2V方法，面向驾驶世界模型
imageFolder: camera-controlled-image-to-video
pubDate: 2026-11-15T12:16+08:00
updatedDate: 2026-11-26T13:50+08:00
---
首先定义我们的任务：

>输入首帧 $I_0$ 及一段相机位姿 $T_{i=1}^N$，我们希望输出一段**从首帧出发的，视点变化与所输入相机位姿一致的视频** 

# 世界模型方法
这类方法没有专门针对“相机控制”去做优化，通常采用单一的生成损失，条件控制作为生成能力训练中学习到的一种附加条件，因此往往控制效果一般。

<a class="paper-title" id="vista-a-generalizable-driving-world-model-with-high-fidelity-and-versatile-controllabilityneurips-2024" href="https://arxiv.org/abs/2405.17398"><strong>Vista</strong></a>（NeurIPS 2024）

[![arXiv](https://img.shields.io/badge/arXiv-2405.17398-b31b1b?style=flat-square)](https://arxiv.org/abs/2405.17398) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://opendrivelab.com/Vista/) [![Code](https://img.shields.io/github/stars/OpenDriveLab/Vista?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/OpenDriveLab/Vista)

<a class="paper-title" id="gem-a-generalizable-ego-vision-multimodal-world-model-for-fine-grained-ego-motion-object-dynamics-and-scene-composition-controlcvpr-2025" href="https://arxiv.org/abs/2412.11198"><strong>GEM</strong></a>（CVPR 2025）

[![arXiv](https://img.shields.io/badge/arXiv-2412.11198-b31b1b?style=flat-square)](https://arxiv.org/abs/2412.11198) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://vita-epfl.github.io/GEM.github.io/) [![Code](https://img.shields.io/github/stars/vita-epfl/GEM?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/vita-epfl/GEM)

<a class="paper-title" id="epona-autoregressive-diffusion-world-model-for-autonomous-drivingiccv-2025" href="https://arxiv.org/abs/2506.24113"><strong>Epona</strong></a>（ICCV 2025）

[![arXiv](https://img.shields.io/badge/arXiv-2506.24113-b31b1b?style=flat-square)](https://arxiv.org/abs/2506.24113) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://kevin-thu.github.io/Epona/) [![Code](https://img.shields.io/github/stars/Kevin-thu/Epona?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Kevin-thu/Epona)

<a class="paper-title" id="geniedrive-towards-physics-aware-driving-world-model-with-4d-occupancy-guided-video-generationcvpr-2026" href="https://arxiv.org/abs/2512.12751"><strong>GenieDrive</strong></a>（CVPR 2026）

[![arXiv](https://img.shields.io/badge/arXiv-2512.12751-b31b1b?style=flat-square)](https://arxiv.org/abs/2512.12751) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://huster-yzy.github.io/geniedrive_project_page/) [![Code](https://img.shields.io/github/stars/Huster-YZY/GenieDrive?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Huster-YZY/GenieDrive)

两阶段生成，先生成4D占据，再用4D占据引导视频生成

<a class="paper-title" id="omninwm-omniscient-driving-navigation-world-modelseccv-2026" href="https://arxiv.org/abs/2510.18313"><strong>OmniNWM</strong></a>（ECCV 2026）

[![arXiv](https://img.shields.io/badge/arXiv-2510.18313-b31b1b?style=flat-square)](https://arxiv.org/abs/2510.18313) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://arlo0o.github.io/OmniNWM/) [![Code](https://img.shields.io/github/stars/Ma-Zhuang/OmniNWM?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Ma-Zhuang/OmniNWM)

用归一化Plucker参数缓解几何协变量偏移
# 间接监督方法

<a class="paper-title" id="motionctrl-a-unified-and-flexible-motion-controller-for-video-generation" href="https://arxiv.org/abs/2312.03641"><strong>MotionCtrl</strong></a>

[![arXiv](https://img.shields.io/badge/arXiv-2312.03641-b31b1b?style=flat-square)](https://arxiv.org/abs/2312.03641) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://wzhouxiff.github.io/projects/MotionCtrl/) [![Code](https://img.shields.io/github/stars/TencentARC/MotionCtrl?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/TencentARC/MotionCtrl)

<a class="paper-title" id="cameractrl-enabling-camera-control-for-video-diffusion-modelsiclr-2025" href="https://arxiv.org/abs/2404.02101"><strong>CameraCtrl</strong></a>（ICLR 2025）

[![arXiv](https://img.shields.io/badge/arXiv-2404.02101-b31b1b?style=flat-square)](https://arxiv.org/abs/2404.02101) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://hehao13.github.io/projects-CameraCtrl/) [![Code](https://img.shields.io/github/stars/hehao13/CameraCtrl?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/hehao13/CameraCtrl)

重点讨论了 

1. 相机如何表示，plucker嵌入
2. 相机姿势如何注入

这两点也成了后续诸多工作的改进点
结构非常简单，损失依旧是生成损失

![](https://img.asera.top/blog/camera-controlled-image-to-video/20261118-fce71aa116ee493c8d2f01e250192a2e.png)

<a class="paper-title" id="cameractrl-ii-dynamic-scene-exploration-via-camera-controlled-video-diffusion-models" href="https://arxiv.org/abs/2503.10592"><strong>CameraCtrl II</strong></a>

[![arXiv](https://img.shields.io/badge/arXiv-2503.10592-b31b1b?style=flat-square)](https://arxiv.org/abs/2503.10592) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://hehao13.github.io/Projects-CameraCtrl-II/)

针对动态性调整了相机注入方式，但是训练方式没有变化


<a class="paper-title" id="cami2v-camera-controlled-image-to-video-diffusion-model" href="https://arxiv.org/abs/2410.15957"><strong>CamI2V</strong></a>

[![arXiv](https://img.shields.io/badge/arXiv-2410.15957-b31b1b?style=flat-square)](https://arxiv.org/abs/2410.15957) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://zgctroy.github.io/CamI2V/) [![Code](https://img.shields.io/github/stars/ZGCTroy/CamI2V?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/ZGCTroy/CamI2V)

1. 相机位姿如何表示？
	类似于CameraCtrl, 使用plucker射线多尺度编码嵌入
2. 如何注入扩散模型？
	引入了对极注意力

生成依旧用的生成损失​

$$
\mathcal{L} = \mathbb{E}_{z_0,t,\epsilon}\left[\left\|\epsilon-\epsilon_\theta\left(z_t,t,c_{\mathrm{img}},c_{\mathrm{txt}},c_{\mathrm{cam}}\right)\right\|_2^2\right]
$$

<a class="paper-title" id="campilot-improving-camera-control-in-video-diffusion-model-with-efficient-camera-reward-feedback" href="https://arxiv.org/abs/2601.16214"><strong>CamPilot</strong></a>

[![arXiv](https://img.shields.io/badge/arXiv-2601.16214-b31b1b?style=flat-square)](https://arxiv.org/abs/2601.16214) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://a-bigbao.github.io/CamPilot/)

如何训练相机控制的？
在模型生成的视频潜变量后面，接一个3D解码器，结合相机位姿输出3DGS，以及对应轨迹的渲染视图，

![](https://img.asera.top/blog/camera-controlled-image-to-video/20261118-9b079ea0b990485a9e7a3636e61505e3.png)

> 不清楚，视频latent直接解码为视频，和3D解码器解码的视频，有什么不同？除了论文中提到的解码速度快

<a class="paper-title" id="posepilot-steering-camera-pose-for-generative-world-models-with-self-supervised-depthiros-2025" href="https://arxiv.org/abs/2505.01729"><strong>PosePilot</strong></a>（IROS 2025）

[![arXiv](https://img.shields.io/badge/arXiv-2505.01729-b31b1b?style=flat-square)](https://arxiv.org/abs/2505.01729)

创新是“几何读出模块＋三个辅助损失”这一整套训练机制。 PosePilot（Jin 等, 2025）保留原世界模型的生成目标，再加入深度、运动估计及相应监督，使生成过程受到几何约束，从而改善相机位姿控制。
引入三项损失: 

$$
L_{total} = L_g + \alpha_p L_p + \alpha_{p^{inv}} L_p^{inv}  + \alpha_{mse}L_{MSE}
$$


<a class="paper-title" id="trimotion-modality-agnostic-camera-control-for-video-generationeccv-2026" href="https://arxiv.org/abs/2606.20774"><strong>TriMotion</strong></a>（ECCV 2026）

[![arXiv](https://img.shields.io/badge/arXiv-2606.20774-b31b1b?style=flat-square)](https://arxiv.org/abs/2606.20774) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://seunghyuns98.github.io/TriMotion/) [![Code](https://img.shields.io/github/stars/seunghyuns98/TriMotion?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/seunghyuns98/TriMotion)

![](https://img.asera.top/blog/camera-controlled-image-to-video/20261118-7adc206623bd40c3ab6d6f81dfe1012a.png)

首先训练出一个轨迹预测器，能够从视频潜变量中编码运动嵌入$e_m$ , 用该嵌入和统一运动空间中的运动嵌入做监督，同时监督运动轨迹和生成质量
> 好奇：运动空间的嵌入有什么物理意义吗，又如何精确引导相机轨迹？

# Training-Free方法

<a class="paper-title" id="probing-into-camera-control-of-video-modelscamprobe" href="https://arxiv.org/abs/2605.14815"><strong>CamProbe</strong></a>

[![arXiv](https://img.shields.io/badge/arXiv-2605.14815-b31b1b?style=flat-square)](https://arxiv.org/abs/2605.14815) [![Project](https://img.shields.io/badge/Website-Project_Page-2774ae?style=flat-square)](https://xrchitech.github.io/camprobe-page/) [![Code](https://img.shields.io/github/stars/xrchitech/CamProbe?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/xrchitech/CamProbe)

如果我们把扩散模型
从采样阶段约束，而不是从生成阶段
