document.addEventListener('DOMContentLoaded', function () {
  var typedTexts = [
    "欢迎来到ShiZhongyan的博客",
    "记录技术与生活，分享成长与快乐"
  ];
  var el = document.getElementById('hero-typed');
  var idx = 0, charIdx = 0, typing = true;

  function typeText() {
    if (!el) return;
    if (charIdx <= typedTexts[idx].length) {
      el.innerHTML = typedTexts[idx].slice(0, charIdx) + '<span class="typed-cursor">|</span>';
      charIdx++;
      setTimeout(typeText, 80);
    } else {
      typing = false;
      setTimeout(function () {
        idx = (idx + 1) % typedTexts.length;
        charIdx = 0;
        typing = true;
        setTimeout(typeText, 600);
      }, 1200);
    }
  }
  typeText();

  // 滚动动画
  var hero = document.querySelector('.hero-area');
  function hideHeroOnScroll() {
    if (!hero) return;
    if (window.scrollY > hero.offsetHeight * 0.5) {
      hero.classList.add('hide');
    } else {
      hero.classList.remove('hide');
    }
  }
  window.addEventListener('scroll', hideHeroOnScroll);
  hideHeroOnScroll();

  // 点击滚动提示直接滚动
  var scrollBtn = document.querySelector('.hero-scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: hero.offsetHeight, behavior: 'smooth' });
    });
  }
});
