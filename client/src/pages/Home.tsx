import { useEffect, useMemo, useState } from "react";

type Scene = "roses" | "sunflowers" | "letter";

// EDIT HERE: customize the letter without changing the animation.
const LETTER_LINES = [
  "Celeste, hermosa...",
  "Hay algo en ti que se queda conmigo incluso cuando no estás: una mirada, una forma de sonreír, esa manera tuya de hacer que todo parezca un poco más intenso.",
  "Te pienso más de lo que debería y, cuando lo hago, me nace ese deseo de tenerte cerca, de perderme contigo en una conversación sin prisa y sentir cómo la distancia deja de existir.",
  "No quiero decirte palabras perfectas; solo quiero que sepas que te anhelo, que me encantas y que hay una parte de mí que todavía sueña con volver a encontrarte.",
  "Ojalá este pequeño detalle te saque una sonrisa... y quizás también despierte en ti un poquito de curiosidad por todo lo que todavía podríamos sentir.",
  "Con deseo y cariño, Celeste. 🌹✨",
];

const rosePositions = [
  { x: 35, y: 47, scale: 0.64, delay: 0.2, tilt: -14 },
  { x: 41, y: 34, scale: 0.78, delay: 0.55, tilt: -7 },
  { x: 47, y: 24, scale: 0.82, delay: 0.85, tilt: 3 },
  { x: 53, y: 31, scale: 1, delay: 1.1, tilt: 9 },
  { x: 59, y: 27, scale: 0.86, delay: 0.7, tilt: 14 },
  { x: 65, y: 43, scale: 0.62, delay: 0.35, tilt: 19 },
  { x: 44, y: 48, scale: 0.54, delay: 1.35, tilt: -20 },
  { x: 57, y: 48, scale: 0.58, delay: 1.5, tilt: 23 },
  { x: 38, y: 56, scale: 0.42, delay: 1.7, tilt: -28 },
  { x: 63, y: 56, scale: 0.44, delay: 1.9, tilt: 28 },
];

const sunflowerPositions = [
  { x: 50, y: 23, scale: 0.72, delay: 1.4, tilt: -4 },
  { x: 38, y: 35, scale: 0.62, delay: 1.7, tilt: -15 },
  { x: 62, y: 34, scale: 0.66, delay: 1.9, tilt: 13 },
  { x: 28, y: 52, scale: 0.53, delay: 2.1, tilt: -22 },
  { x: 74, y: 50, scale: 0.56, delay: 2.25, tilt: 19 },
  { x: 47, y: 52, scale: 0.9, delay: 1.2, tilt: -2 },
  { x: 56, y: 54, scale: 0.82, delay: 1.55, tilt: 5 },
  { x: 18, y: 52, scale: 0.42, delay: 2.35, tilt: -28 },
  { x: 84, y: 53, scale: 0.44, delay: 2.5, tilt: 27 },
];

function Sparkles() {
  const sparkles = useMemo(() => Array.from({ length: 26 }, (_, index) => ({
    left: `${(index * 43 + 7) % 97}%`, top: `${(index * 29 + 5) % 78}%`, size: `${2 + (index % 3)}px`, delay: `${(index % 7) * 0.55}s`, duration: `${3.8 + (index % 4) * 0.8}s`,
  })), []);
  return <div className="sparkle-field" aria-hidden="true">{sparkles.map((sparkle, index) => <span className="sparkle" key={index} style={{ left: sparkle.left, top: sparkle.top, width: sparkle.size, height: sparkle.size, animationDelay: sparkle.delay, animationDuration: sparkle.duration }} />)}</div>;
}

function FallingPetals({ scene }: { scene: Scene }) {
  const petals = useMemo(() => Array.from({ length: 30 }, (_, index) => ({
    left: `${(index * 17 + 3) % 101}%`, delay: `${(index % 8) * 0.85}s`, duration: `${8 + (index % 5) * 1.2}s`, size: `${7 + (index % 4) * 2}px`, drift: `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 5) * 7)}px`,
  })), []);
  return <div className={`petal-field petal-field--${scene}`} aria-hidden="true">{petals.map((petal, index) => <span className="falling-petal" key={index} style={{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration, width: petal.size, height: `calc(${petal.size} * 1.45)`, ["--drift" as string]: petal.drift }} />)}</div>;
}

function AmbientLights() {
  const lights = useMemo(() => Array.from({ length: 18 }, (_, index) => ({
    left: `${(index * 31 + 9) % 96}%`, top: `${(index * 19 + 14) % 82}%`, delay: `${(index % 9) * 0.7}s`, size: `${3 + (index % 3)}px`,
  })), []);
  return <div className="ambient-lights" aria-hidden="true">{lights.map((light, index) => <span key={index} style={{ left: light.left, top: light.top, width: light.size, height: light.size, animationDelay: light.delay }} />)}</div>;
}

function Rose({ x, y, scale, delay, tilt }: (typeof rosePositions)[number]) {
  return <div className="rose" style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%) scale(${scale}) rotate(${tilt}deg)`, animationDelay: `${delay}s` }} aria-hidden="true">
    <span className="rose__stem" /><span className="rose__leaf rose__leaf--left" /><span className="rose__leaf rose__leaf--right" />
    <span className="rose__bloom">{Array.from({ length: 9 }, (_, index) => <i key={index} style={{ transform: `rotate(${index * 40}deg) translateY(-19px)` }} />)}<b /></span>
  </div>;
}

function Sunflower({ x, y, scale, delay, tilt }: (typeof sunflowerPositions)[number]) {
  return <div className="sunflower" style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%) scale(${scale}) rotate(${tilt}deg)`, animationDelay: `${delay}s` }} aria-hidden="true">
    <span className="sunflower__stem" /><span className="sunflower__leaf sunflower__leaf--left" /><span className="sunflower__leaf sunflower__leaf--right" />
    <span className="sunflower__head">{Array.from({ length: 14 }, (_, index) => <i key={index} style={{ transform: `rotate(${index * (360 / 14)}deg) translateY(-29px)` }} />)}<b /></span>
  </div>;
}

function Letter({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return <div className={`letter-stage ${open ? "letter-stage--open" : ""}`}>
    <p className="letter-kicker">Un pequeño detalle para ti</p>
    <button className="envelope" type="button" onClick={onToggle} aria-label={open ? "Cerrar la carta" : "Abrir la carta"} aria-expanded={open}>
      <span className="envelope__glow" /><span className="envelope__shadow" />
      <span className="envelope__paper"><span className="paper__rule paper__rule--one" /><span className="paper__rule paper__rule--two" /><span className="paper__sign">M</span><span className="paper__copy">{LETTER_LINES.map((line, index) => <span key={index} className={index === 0 || index === LETTER_LINES.length - 1 ? "paper__line paper__line--accent" : "paper__line"}>{line}</span>)}</span></span>
      <span className="envelope__back" /><span className="envelope__front" /><span className="envelope__flap" /><span className="envelope__seal">✦</span>
    </button>
    <p className="letter-hint">{open ? "Toca la hoja para guardar la carta" : "Toca para abrir"}</p>
  </div>;
}

export default function Home() {
  const [scene, setScene] = useState<Scene>("roses");
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    if (scene !== "sunflowers") return;
    const timer = window.setTimeout(() => setScene("letter"), 9200);
    return () => window.clearTimeout(timer);
  }, [scene]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setLetterOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const continueToYellow = () => setScene("sunflowers");

  return <main className={`story story--${scene} ${letterOpen ? "story--letter-open" : ""}`}>
    <div className="story__noise" aria-hidden="true" /><div className="story__aurora story__aurora--one" aria-hidden="true" /><div className="story__aurora story__aurora--two" aria-hidden="true" />
    <Sparkles /><AmbientLights /><FallingPetals scene={scene} />
    <header className="story-header"><div className="story-mark"><span>21</span><i>septiembre</i></div><div className="story-counter" aria-label="Tres momentos"><span className={scene === "roses" ? "is-active" : ""} /><span className={scene === "sunflowers" ? "is-active" : ""} /><span className={scene === "letter" ? "is-active" : ""} /></div></header>

    <section className="opening-copy" aria-live="polite"><p className="eyebrow">Una primera flor para ti</p><h1>Para <em>Celeste</em>,<br />con todo mi cariño.</h1><p className="opening-copy__name">Hay algo que quiero mostrarte</p><span className="opening-copy__line" /></section>

    <section className="rose-grove" aria-hidden="true"><div className="rose-grove__glow" /><div className="rose-grove__ground" />{rosePositions.map((rose, index) => <Rose key={index} {...rose} />)}</section>
    <section className="rose-copy" aria-live="polite"><p className="eyebrow">Un ramo que empezó a florecer</p><h2>Celeste</h2><p>Pero todavía falta la parte más amarilla de la historia.</p></section>
    <button className="phase-trigger" type="button" onClick={continueToYellow} aria-label="Continuar hacia las flores amarillas"><span className="phase-trigger__dot">↗</span><span>Ver cómo florece</span></button>

    <section className="wildflower-field" aria-hidden="true"><div className="horizon" /><div className="field-glow" /></section>
    <section className="sunflower-grove" aria-hidden="true"><div className="grove-glow" /><div className="grove-ground" />{sunflowerPositions.map((flower, index) => <Sunflower key={index} {...flower} />)}</section>
    <section className="sunflower-copy" aria-live="polite"><p className="eyebrow">Y de pronto, todo se vuelve amarillo</p><h2>Para ti,<br /><em>Celeste.</em></h2><p className="sunflower-copy__name">Que nunca te falte luz <span>✦</span></p></section>

    <section className="letter-zone"><div className="letter-backdrop" aria-hidden="true" /><Letter open={letterOpen} onToggle={() => setLetterOpen((value) => !value)} /></section>
    <footer className="story-footer"><span>Hecho con cariño</span><span className="footer-flower">✳</span><span>para Celeste</span></footer>
  </main>;
}
