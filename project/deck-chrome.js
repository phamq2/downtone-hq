/* Downtone ethos deck — persistent chrome (section nav + progress).
   Injects a footer into every slide: wordmark · 00–07 tick nav · chapter name,
   plus a bottom progress hairline. Static per slide, so it prints cleanly. */
(function () {
  var CHAPTERS = [
    { id: '0', n: '00', name: 'The Bet' },
    { id: '1', n: '01', name: 'What Is Downtone' },
    { id: '2', n: '02', name: 'Daily Rhythm' },
    { id: '3', n: '03', name: 'Founding Thesis' },
    { id: '4', n: '04', name: 'Operating Principles' },
    { id: '5', n: '05', name: 'Programmatic Topologies' },
    { id: '6', n: '06', name: 'The Room' },
    { id: '7', n: '07', name: 'Legacy & Lineage' },
  ];

  function build() {
    var stage = document.querySelector('deck-stage');
    if (!stage) return;
    var slides = Array.prototype.filter.call(stage.children, function (el) {
      return el.tagName === 'SECTION';
    });
    var total = slides.length;

    // index of each chapter's divider slide (for tick navigation)
    var dividerIndex = {};
    slides.forEach(function (s, i) {
      if (s.classList.contains('divider')) {
        var c = s.getAttribute('data-chapter');
        if (c != null && dividerIndex[c] === undefined) dividerIndex[c] = i;
      }
    });

    slides.forEach(function (slide, i) {
      var chap = slide.getAttribute('data-chapter');
      if (chap === 'cover' || chap === 'close') return;
      if (slide.querySelector(':scope > .chrome')) return;

      var meta = CHAPTERS.filter(function (c) { return c.id === chap; })[0];

      // footer
      var chrome = document.createElement('div');
      chrome.className = 'chrome';

      var mark = document.createElement('img');
      mark.className = 'ch-mark';
      mark.src = 'brand/Downtone-logo-white.svg';
      mark.alt = 'Downtone';
      chrome.appendChild(mark);

      var nav = document.createElement('div');
      nav.className = 'ch-nav';
      CHAPTERS.forEach(function (c) {
        var b = document.createElement('button');
        b.className = 'tick' + (meta && c.id === meta.id ? ' on' : '');
        b.textContent = c.n;
        b.title = c.n + ' — ' + c.name;
        b.addEventListener('click', function () {
          var idx = dividerIndex[c.id];
          if (idx !== undefined && stage.goTo) stage.goTo(idx);
        });
        nav.appendChild(b);
      });
      chrome.appendChild(nav);

      var name = document.createElement('div');
      name.className = 'ch-name';
      if (meta) {
        name.innerHTML = '<span class="c">' + meta.n + '</span> &nbsp;' + meta.name.toUpperCase();
      }
      chrome.appendChild(name);

      slide.appendChild(chrome);

      // progress hairline
      var bar = document.createElement('div');
      bar.className = 'chrome-bar';
      var fill = document.createElement('div');
      fill.className = 'fill';
      fill.style.width = (((i + 1) / total) * 100).toFixed(2) + '%';
      bar.appendChild(fill);
      slide.appendChild(bar);
    });
  }

  function start() {
    build(); // immediate attempt
    // re-run once the component is defined (setTimeout fires even when the
    // tab is backgrounded — requestAnimationFrame can be throttled there)
    if (window.customElements && customElements.whenDefined) {
      customElements.whenDefined('deck-stage').then(function () {
        setTimeout(build, 0);
      });
    }
    // and on the deck's own init/slidechange, as a belt-and-suspenders trigger
    var stage = document.querySelector('deck-stage');
    if (stage) stage.addEventListener('slidechange', function () { build(); });
    setTimeout(build, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
