# SZYBLOG
一个美观的二次元hexo博客模板

## 项目简介
SZYBLOG 是一个基于AnZhiyu主题进行魔改，简洁、美观、二次元风格的 Hexo 博客主题模板，适合喜欢动漫、二次元与精致排版的个人博客。模板注重视觉效果与阅读体验，提供常用的主题配置与优化方案，便于快速搭建个性化博客。

如果对模板有问题，请到AnZhiyu主题官网寻求帮助:[AnZhiyu主题](https://docs.anheyu.com)
或者联系本文作者:[ShiZhongyan](mailto:support@szystudio.cn)

## 主要特性
- 二次元风格视觉主题，支持壁纸与自定义头像
- 响应式布局，适配移动端与桌面端
- 支持文章目录、代码高亮、数学公式（KaTeX/MathJax）
- 支持分页、标签与分类页
- 支持搜索（本地/第三方）、站内评论（如 Valine/Utterances）
- 易于自定义的配置项与主题色方案

## 预览与演示
- 预览地址：[https://www.szyd.fun](https://www.szyd.fun)

## 环境要求
- Node.js >= 12
- Hexo >= 5.x
- Git（可选，用于部署）

## 安装与快速开始
### 方法一：本地部署
1. 安装 Hexo（若尚未安装）：
   - npm install -g hexo-cli
2. 在 Hexo 博客根目录中安装或复制本主题：
   - 将本模板目录放入 themes/szyblog
3. 在 Hexo 根目录的 _config.yml 中设置主题：
   - theme: szyblog
4. 安装依赖并启动本地预览：
   - npm install
   - hexo clean && hexo s
### 方法二：GitHub克隆部署
1. 克隆本仓库
2. 按配置说明直接更改文件
3. 等待工作流完成
4. 使用Vercel或者GitHub Pages将生成在public分支的静态文件进行公网部署

## 配置说明
注意：以下教程为基础教程，详细内容请进入[AnZhiyu主题](https://docs.anheyu.com)寻求帮助

在 themes/szyblog/_config.yml 中可配置的常用项：
- site_title: 站点标题
- author: 作者名称
- description: 站点描述
- avatar: 头像 URL
- cover: 主页封面/壁纸
- theme_color: 主题色（支持预设或自定义）
- comments: 评论系统配置（Valine、Gitalk、Utterances 等）
- math: 是否启用数学公式（katex / mathjax）

（具体配置项请参考主题目录下的 config 示例或注释）

## 自定义与扩展
- 修改样式：在 themes/szyblog/source/css/ 或 scss/ 中编辑样式文件
- 自定义页面：在 source/ 下添加自定义页面（如 about、projects）
- 插件支持：按需在博客根目录的 _config.yml 中启用 Hexo 插件（例如 hexo-tag-aplayer、hexo-generator-search）

## 部署
常见部署方式：
- GitHub Pages：使用 hexo-deployer-git，将生成的 public 推送到 gh-pages 分支
- 自有服务器：上传 public 到服务器或通过 CI/CD 自动部署
- 配置示例（_config.yml）：
  deploy:
    type: git
    repo: https://github.com/username/repo.git
    branch: gh-pages

## 开发与贡献
欢迎提交 Issue 与 Pull Request：
- Fork 仓库并创建分支
- 提交说明明确的 PR
- 保持改动粒度小，附带必要的截图或复现步骤

## 许可证
本项目采用 Apache 2许可证。详情见 LICENSE 文件。

## 联系方式
如需交流或定制主题，可在仓库 Issue 中留言

邮箱：[ShiZhongyan](mailto:support@szystudio.cn)

QQ:1774297708

个人网站：[https://www.szyd.fun](https://www.szyd.fun)
