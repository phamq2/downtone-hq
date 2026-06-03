/* Downtone — archival carousel. Crossfades build photos (and a muted video)
   with dots, prev/next, per-image caption. Respects reduced-motion (manual
   only). Deck: starts fresh when its slide becomes active. Reading doc: runs
   while on screen (IntersectionObserver). Video slides autoplay muted/looped
   while active and pause otherwise; they get a longer dwell. */
(function () {
  function isVideo(el) { return el && el.tagName === 'VIDEO'; }

  function init(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.cslide'));
    var dotsWrap = root.querySelector('.cdots');
    var capEl = root.querySelector('.ccap');
    var n = slides.length;
    var i = 0, timer = null, dots = [];
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (dotsWrap) {
      for (var k = 0; k < n; k++) {
        (function (k) {
          var b = document.createElement('button');
          b.className = 'cdot';
          b.setAttribute('aria-label', 'Image ' + (k + 1));
          b.addEventListener('click', function () { go(k); schedule(); });
          dotsWrap.appendChild(b);
          dots.push(b);
        })(k);
      }
    }

    function playActive() {
      slides.forEach(function (s, idx) {
        if (!isVideo(s)) return;
        if (idx === i && !reduce) { try { s.currentTime = 0; var p = s.play(); if (p && p.catch) p.catch(function(){}); } catch (e) {} }
        else { try { s.pause(); } catch (e) {} }
      });
    }
    function render() {
      slides.forEach(function (s, idx) { s.classList.toggle('on', idx === i); });
      dots.forEach(function (d, idx) { d.classList.toggle('on', idx === i); });
      if (capEl) capEl.textContent = slides[i] ? (slides[i].getAttribute('data-cap') || '') : '';
      playActive();
    }
    function go(k) { i = (k + n) % n; render(); }

    function clear() { if (timer) { clearTimeout(timer); timer = null; } }
    function schedule() {
      clear();
      if (n < 2 || reduce) return;
      var d = isVideo(slides[i]) ? 6500 : 3400;
      timer = setTimeout(function () { go(i + 1); schedule(); }, d);
    }
    function start() { if (!timer) { playActive(); schedule(); } }
    function stop() {
      clear();
      slides.forEach(function (s) { if (isVideo(s)) { try { s.pause(); } catch (e) {} } });
    }
    function reset() { go(0); schedule(); }

    root.addEventListener('mouseenter', clear);
    root.addEventListener('mouseleave', schedule);
    var pv = root.querySelector('.cprev'), nx = root.querySelector('.cnext');
    if (pv) pv.addEventListener('click', function () { go(i - 1); schedule(); });
    if (nx) nx.addEventListener('click', function () { go(i + 1); schedule(); });

    render();
    root._carousel = { start: start, stop: stop, reset: reset };
  }

  function initAll() {
    var roots = Array.prototype.slice.call(document.querySelectorAll('.carousel'));
    if (!roots.length) return;
    roots.forEach(init);

    var stage = document.querySelector('deck-stage');
    if (stage) {
      var sync = function () {
        roots.forEach(function (r) {
          if (!r._carousel) return;
          var sec = r.closest('section');
          if (sec && sec.hasAttribute('data-deck-active')) r._carousel.reset();
          else r._carousel.stop();
        });
      };
      stage.addEventListener('slidechange', sync);
      setTimeout(sync, 300);
      setTimeout(sync, 1200);
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.target._carousel) return;
          if (e.isIntersecting) e.target._carousel.start();
          else e.target._carousel.stop();
        });
      }, { threshold: 0.25 });
      roots.forEach(function (r) { io.observe(r); });
    } else {
      roots.forEach(function (r) { if (r._carousel) r._carousel.start(); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();
})();
