---
title: 影院
date: 2025-10-06 15:07:53
---
<div style="text-align: center; margin: 20px 0;">
  <div style="display: inline-block; background: #f5f5f5; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <input
      type="text"
      id="txVideoUrl"
      placeholder="欢迎来到SZY解析，请输入腾讯视频 VIP 网址（如 https://v.qq.com/xxx）"
      style="
        padding: 10px;
        width: 400px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        outline: none;
      "
    >
    <button
      onclick="loadIframe()"
      style="
        padding: 10px 20px;
        background: #06f;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 10px;
        transition: background 0.3s;
      "
      onmouseover="this.style.background='#005ce6'"
      onmouseout="this.style.background='#06f'"
    >
      解析视频
    </button>
  </div>
</div>
<iframe
  id="videoPlayer"
  width="100%"
  height="500"
  frameborder="0"
  style="
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  "
  allowfullscreen
></iframe>

<script>
  function loadIframe() {
    const url = document.getElementById('txVideoUrl').value.trim();
    if (!url) {
      alert("请输入腾讯视频网址！");
      return;
    }
    if (!url.includes('v.qq.com') && !url.includes('qq.com')) {
      alert("请确保输入的是腾讯视频网址（如 https://v.qq.com/xxx）");
      return;
    }
    const encodedUrl = encodeURIComponent(url);
    document.getElementById('videoPlayer').src = `https://jx.playerjy.com/?url=${encodedUrl}`;
  }
</script>
