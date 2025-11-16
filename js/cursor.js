var CURSOR;

Math.lerp = (a, b, n) => (1 - n) * a + n * b;

const getStyle2 = (el, attr) => {
  try {
    return window.getComputedStyle
      ? window.getComputedStyle(el)[attr]
      : el.currentStyle[attr];
  } catch (e) { }
  return "";
};

const map = new Map();
map.set('red', "rgb(241, 71, 71)");
map.set('orange', "rgb(241, 162, 71)");
map.set('yellow', "rgb(241, 238, 71)")
map.set('purple', "rgb(179, 71, 241)");
map.set('blue', "rgb(102, 204, 255)");
map.set('gray', "rgb(226, 226, 226)");
map.set('green', "rgb(57, 197, 187)");
map.set('whitegray', "rgb(241, 241, 241)");
map.set('pink', "rgb(237, 112, 155)");
map.set('black', "rgb(0, 0, 0)");
map.set('darkblue', "rgb(97, 100, 159)");
map.set('heoblue', "rgb(66, 90, 239)");

class Cursor {
  constructor() {
    this.pos = { curr: null, prev: null };
    this.create();
    this.init();
    this.render();
  }

  move(left, top) {
    if (!this.cursor) return;
    this.cursor.style.transform = `translate3d(${left}px, ${top}px, 0) translate(-50%, -50%)`;
  }

  create() {
    if (!this.cursor) {
      this.cursor = document.createElement("div");
      this.cursor.id = "cursor";
      this.cursor.classList.add("hidden");
      const ring = document.createElement("div");
      ring.className = "cursor-ring";
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      const rippleContainer = document.createElement("div");
      rippleContainer.className = "cursor-ripples";
      this.cursor.appendChild(ring);
      this.cursor.appendChild(dot);
      this.cursor.appendChild(rippleContainer);
      document.body.append(this.cursor);
    }
    try { if (this.scr) this.scr.remove(); } catch (e) { }
    this.scr = document.createElement("style");
    const colorVal = (localStorage.getItem("themeColor") || "heoblue");
    const colorRgb = map.get(colorVal) || map.get('heoblue');
    this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8' height='8'><circle cx='4' cy='4' r='4' fill='${colorRgb}'/></svg>") 4 4, auto }`;
    document.head.appendChild(this.scr);
  }

  refresh() {
    if (!this.cursor) return;
    this.cursor.classList.add("hidden");
    this.pos = { curr: null, prev: null };
    const rc = this.cursor.querySelector(".cursor-ripples");
    if (rc) rc.innerHTML = "";
  }

  init() {
    const pointerSelector = 'a, button, input[type="button"], input[type="submit"], [role="button"], [data-cursor="pointer"], .cursor-pointer';
    document.addEventListener('mousemove', e => {
      if (this.pos.curr == null) this.move(e.clientX, e.clientY);
      this.pos.curr = { x: e.clientX, y: e.clientY };
      this.cursor.classList.remove("hidden");
    }, { passive: true });

    document.addEventListener('mouseover', e => {
      const hit = e.target.closest(pointerSelector);
      if (hit) this.cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', e => {
      const hit = e.target.closest(pointerSelector);
      if (hit) this.cursor.classList.remove('hover');
    });

    document.addEventListener('mousedown', e => {
      this.cursor.classList.add('active');
      this.createRipple(e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener('mouseup', e => {
      this.cursor.classList.remove('active');
    });

    document.addEventListener('mouseenter', () => this.cursor.classList.remove('hidden'));
    document.addEventListener('mouseleave', () => this.cursor.classList.add('hidden'));
  }

  createRipple(x, y) {
    const rc = this.cursor.querySelector(".cursor-ripples");
    if (!rc) return;
    const ripple = document.createElement("div");
    ripple.className = "cursor-ripple ripple-animate";
    rc.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  render() {
    const speed = 0.12;
    if (this.pos.prev) {
      this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, speed);
      this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, speed);
      this.move(this.pos.prev.x, this.pos.prev.y);
    } else {
      this.pos.prev = this.pos.curr;
    }
    requestAnimationFrame(() => this.render());
  }
}

(() => {
  if (typeof CURSOR !== 'undefined' && CURSOR && CURSOR.refresh) {
    CURSOR.refresh();
  } else {
    CURSOR = new Cursor();
  }
})();