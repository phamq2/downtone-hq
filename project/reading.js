/* Downtone ethos reading document — progress, section nav, scroll reveal. */
(function () {
  document.documentElement.classList.add('js');

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var fill = document.querySelector('.progress .fill');
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.sidenav a'));
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    // reveal anything near/above the fold — runs from the scroll handler too,
    // so it works even where IntersectionObserver/rAF are throttled (e.g. a
    // backgrounded preview iframe).
    function checkReveals() {
      if (!reveals.length) return;
      var vh = window.innerHeight;
      reveals = reveals.filter(function (el) {
        if (el.getBoundingClientRect().top < vh * 0.92) { el.classList.add('in'); return false; }
        return true;
      });
    }

    // ---- progress bar ----
    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      if (fill) fill.style.width = (p * 100).toFixed(2) + '%';
      checkReveals();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    // ---- active section in nav ----
    var byId = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').replace('#', '');
      byId[id] = a;
    });
    if ('IntersectionObserver' in window && sections.length) {
      var navObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var id = e.target.id;
            navLinks.forEach(function (a) { a.classList.remove('active'); });
            if (byId[id]) byId[id].classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { navObs.observe(s); });
    }

    // ---- scroll reveal (IntersectionObserver as enhancement) ----
    if ('IntersectionObserver' in window) {
      var revObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revObs.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      reveals.forEach(function (el) { revObs.observe(el); });
    }
    // primary, reliable pass + a couple of safety passes
    checkReveals();
    requestAnimationFrame(checkReveals);
    setTimeout(checkReveals, 400);
    setTimeout(function () { reveals.forEach(function (el) { el.classList.add('in'); }); reveals = []; }, 2500);
  });
})();
