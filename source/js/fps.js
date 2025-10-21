// 确保 #fps 元素存在；不存在则创建并追加到 body，然后使用该引用更新内容或隐藏它。
if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
  // 确保元素存在
  var fpsEl = document.getElementById("fps");
  if (!fpsEl) {
    fpsEl = document.createElement("div");
    fpsEl.id = "fps";
    // 保留最小内联定位，实际样式由 CSS 覆盖
    fpsEl.style.position = "fixed";
    fpsEl.style.left = "10px";
    fpsEl.style.bottom = "10px";
    fpsEl.style.zIndex = "1919810";
    document.body.appendChild(fpsEl);
  }

  // 初始化内容结构（dot + text）
  fpsEl.innerHTML = '<span class="fps-dot"></span><div class="fps-text"><span class="fps-main">FPS: --</span><span class="fps-sub">初始化中...</span></div>';

  var rAF = function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }();
  var frame = 0;
  var allFrameCount = 0;
  var lastTime = Date.now();
  var lastFameTime = Date.now();
  var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime) || 16;
    var fps = Math.round(1000 / fs);

    lastFameTime = now;
    allFrameCount++;
    frame++;

    if (now > 1000 + lastTime) {
      var fpsVal = Math.round((frame * 1000) / (now - lastTime));
      var statusClass, subText;
      if (fpsVal <= 15) {
        statusClass = 'low';
        subText = '卡成 PPT';
      } else if (fpsVal <= 25) {
        statusClass = 'medium';
        subText = '有点卡顿';
      } else if (fpsVal <= 45) {
        statusClass = 'good';
        subText = '流畅';
      } else {
        statusClass = 'excellent';
        subText = '十分流畅';
      }

      // 更新 class（移除旧状态类）
      fpsEl.classList.remove('low','medium','good','excellent');
      fpsEl.classList.add(statusClass);

      // 更新显示文本
      var mainEl = fpsEl.querySelector('.fps-main');
      var subEl = fpsEl.querySelector('.fps-sub');
      if (mainEl) mainEl.textContent = 'FPS: ' + fpsVal;
      if (subEl) subEl.textContent = subText;

      frame = 0;
      lastTime = now;
    };

    rAF(loop);
  }

  loop();
} else {
  // 如果需要隐藏，先确认元素存在再操作
  var fpsElHide = document.getElementById("fps");
  if (fpsElHide) {
    fpsElHide.style.display = "none";
  }
}