---
title: 关于
date: 2025-03-23 23:59:28
---

# 线路信息🚁

本网站采用多线路并行部署，一份源码同时分发给多个托管商

{% note info flat %}
主域名：szyd.fun | blog.szyd.fun
均解析至Vercel，Vercel有全球的泛播节点，兼具全球CDN功能，国内访问速度较快 (Ping值：70-80ms)
{% endnote %}

{% note success flat %}
备用域名1：shizhongyangh.github/io
直链至Github泛播，国内速度较慢 (Ping值：80-120ms)
目前主域www.szyd.fun已劫持分流至缤纷云，在国内速度非常快 (Ping值：30-50ms)
{% endnote %}

{% note primary flat %}
以上所有线路均支持HTTPS协议
{% endnote %}

# 技术栈&框架🧪

{% tabs 技术栈 %}
<!-- tab 基础框架 -->
- 博客框架：Hexo 6.3.0
- 主题：Butterfly 4.3.1
- 源码仓库：Github
- 托管与部署：本网站采用多线部署，包括Vercel + Netlify + Cloudflare + Railway + Fleek + Render + Zeabur + Github Pages 等
<!-- endtab -->

<!-- tab 功能组件 -->
- 评论系统：Twikoo系统 + Vercel部署 + MongoDB提供存储服务
- 图床：缤纷云Bucket + 初柒工坊图床 + SKY CHART BED
- CDN：TianliCDN + Staticfile CDN + 75CDN + 字节跳动静态资源公共库 + elemecdn 等
- 音乐平台：hexo-tag-aplayer + MetingJS
- 哔哔：Ispeak + MongoDB提供存储服务
<!-- endtab -->

<!-- tab 性能优化 -->
- 图片压缩：Imagine有损压缩技术 + imagesTool转化图片格式为webp
- 字体压缩: 基于Python的fonttools子集化压缩 + CloudConvert压缩为woff2格式
- 静态资源压缩: gulp + JS & CSS Minifier (Minify)
- 异步加载与缓存加速技术：Pjax
- 线路优化：利用Service Worker劫持主域链接至缤纷云Bucket，从而实现将请求分流至国内线路，以提高访问速度(参考LYX大佬的方案)
<!-- endtab -->

<!-- tab 数据与监控 -->
- 流量监控：51la + 灵雀监控
- 友链朋友圈：hexo-circle-of-friends爬虫 + SQLite提供存储服务 + Vercel部署
- 微博热搜：weibo-top-api爬虫 + Vercel部署
- 博客统计：不蒜子 + 百度统计 + baidu-tongji-api爬虫 + Vercel部署
<!-- endtab -->

<!-- tab 其他技术 -->
- 自动部署：Git 钩子 + Github Action
- SEO优化：谷歌 + 必应 + 百度
- 弹窗框架支持：Element + Vue
- 开发语言：HTML5 + CSS3 + JavaScript + Pug + YML等
- 文章摘要生成：Post-Abstract-AI
- 版权声明：详见CC BY-NC-SA 4.0
- 维护日志：见旧时光栏目
<!-- endtab -->
{% endtabs %}

{% note success %}
鸣谢：初柒工坊图床免费提供图片存储服务
{% endnote %}

# 关于本人📃

{% tabs 个人信息 %}
<!-- tab 基本信息 -->
- 昵称：ShiZhongyan🍭
- 性别：♂
- 生日：2013-9
- 身份：小学生
- 地点：北京
- 邮箱：1174008660@qq.com | support@shizhongyan.site
<!-- endtab -->

<!-- tab 技能树 -->
擅长：
- Java
- C#
- C
- ARM体系架构
- 数据结构与算法
- 嵌入式驱动开发
- 自动化软件开发

{% note primary flat %}
技能树持续点亮中...
{% endnote %}
<!-- endtab -->
{% endtabs %}

{% note info %}
如果您有任何问题或建议，欢迎通过以上邮箱联系我！
{% endnote %}
