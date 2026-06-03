// Downtone ethos deck — Tweaks: color pairing + imagery density.
const ETHOS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "pairing": ["#201900", "#FFC0B9"],
  "imagery": "balanced"
}/*EDITMODE-END*/;

// Approved Downtone dark/bright pairings (bg, accent)
const ETHOS_PAIRS = [
  ["#201900", "#FFC0B9"], // Olive / Peach
  ["#002100", "#FFA0F1"], // Green / Pink
  ["#21132D", "#005CFF"], // Plum / Blue
  ["#330000", "#A19AFF"], // Wine / Lilac
  ["#1E0039", "#FF5D00"], // Purple / Orange
  ["#141414", "#FF9B00"], // Black / Amber
  ["#362734", "#00EB72"], // Mauve / Green
];

function EthosTweaks() {
  const [t, setTweak] = useTweaks(ETHOS_DEFAULTS);

  React.useEffect(() => {
    const [bg, accent] = t.pairing || ETHOS_DEFAULTS.pairing;
    const root = document.documentElement;
    root.style.setProperty('--deck-bg', bg);
    root.style.setProperty('--deck-accent', accent);
  }, [t.pairing]);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('img-minimal', 'img-balanced', 'img-rich');
    root.classList.add('img-' + (t.imagery || 'balanced'));
  }, [t.imagery]);

  return (
    <TweaksPanel>
      <TweakSection label="Color pairing" />
      <TweakColor
        label="Field / accent"
        value={t.pairing}
        options={ETHOS_PAIRS}
        onChange={(v) => setTweak('pairing', v)}
      />
      <TweakSection label="Imagery" />
      <TweakRadio
        label="Density"
        value={t.imagery}
        options={['minimal', 'balanced', 'rich']}
        onChange={(v) => setTweak('imagery', v)}
      />
    </TweaksPanel>
  );
}

(function mount() {
  const el = document.getElementById('tweaks-root');
  if (!el) return;
  ReactDOM.createRoot(el).render(<EthosTweaks />);
})();
