/* Painel de Tweaks — aplica direção visual, fonte, acento e grade ao site vanilla */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direcao": "grid",
  "fonte": "auto",
  "acento": "nenhum",
  "grade": "auto"
}/*EDITMODE-END*/;

const FONT_MAP = {
  auto: "",
  mono: '"JetBrains Mono", monospace',
  grotesk: '"Space Grotesk", sans-serif',
  serif: '"Newsreader", Georgia, serif',
};

const ACCENT_MAP = {
  nenhum: { a: "var(--fg)", f: "var(--bg)" },
  verde:  { a: "oklch(0.81 0.15 156)", f: "#08130c" },
  azul:   { a: "oklch(0.74 0.13 248)", f: "#060b16" },
  ambar:  { a: "oklch(0.83 0.14 82)", f: "#1a1304" },
};

function applyTweaks(t) {
  const root = document.documentElement;
  root.classList.add("no-trans");
  root.setAttribute("data-theme", t.direcao);

  if (t.fonte === "auto") root.style.removeProperty("--tw-display");
  else root.style.setProperty("--tw-display", FONT_MAP[t.fonte] || "");

  const ac = ACCENT_MAP[t.acento] || ACCENT_MAP.nenhum;
  root.style.setProperty("--accent", ac.a);
  root.style.setProperty("--accent-fg", ac.f);

  if (t.grade === "auto") root.style.removeProperty("--grid-visible");
  else root.style.setProperty("--grid-visible", t.grade === "on" ? "1" : "0");

  requestAnimationFrame(function () {
    requestAnimationFrame(function () { root.classList.remove("no-trans"); });
  });
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direção visual" />
      <TweakSelect
        label="Estilo"
        value={t.direcao}
        options={[
          { value: "grid", label: "Grid · referência" },
          { value: "terminal", label: "Terminal · código" },
          { value: "editorial", label: "Editorial · claro" },
        ]}
        onChange={(v) => setTweak("direcao", v)}
      />

      <TweakSection label="Tipografia" />
      <TweakSelect
        label="Fonte dos títulos"
        value={t.fonte}
        options={[
          { value: "auto", label: "Automática (do estilo)" },
          { value: "mono", label: "Mono · JetBrains" },
          { value: "grotesk", label: "Grotesk · Space" },
          { value: "serif", label: "Serif · Newsreader" },
        ]}
        onChange={(v) => setTweak("fonte", v)}
      />

      <TweakSection label="Cor de acento" />
      <TweakSelect
        label="Acento"
        value={t.acento}
        options={[
          { value: "nenhum", label: "Nenhum · puro P&B" },
          { value: "verde", label: "Verde terminal" },
          { value: "azul", label: "Azul" },
          { value: "ambar", label: "Âmbar" },
        ]}
        onChange={(v) => setTweak("acento", v)}
      />

      <TweakSection label="Fundo" />
      <TweakSelect
        label="Grade"
        value={t.grade}
        options={[
          { value: "auto", label: "Automática (do estilo)" },
          { value: "on", label: "Sempre visível" },
          { value: "off", label: "Oculta" },
        ]}
        onChange={(v) => setTweak("grade", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
