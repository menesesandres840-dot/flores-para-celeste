export type Scene = "roses" | "sunflowers" | "letter";

export const LETTER_LINES = [
  "Celeste, hermosa...",
  "Hay algo en ti que se queda conmigo incluso cuando no estás: una mirada, una forma de sonreír, esa manera tuya de hacer que todo parezca un poco más intenso.",
  "Te pienso más de lo que debería y, cuando lo hago, me nace ese deseo de tenerte cerca, de perderme contigo en una conversación sin prisa y sentir cómo la distancia deja de existir.",
  "No quiero decirte palabras perfectas; solo quiero que sepas que te anhelo, que me encantas y que hay una parte de mí que todavía sueña con volver a encontrarte.",
  "Ojalá este pequeño detalle te saque una sonrisa... y quizás también despierte en ti un poquito de curiosidad por todo lo que todavía podríamos sentir.",
  "Con deseo y cariño, Celeste. 🌹✨",
] as const;

export const rosePositions = [
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
] as const;

export const sunflowerPositions = [
  { x: 50, y: 23, scale: 0.72, delay: 1.4, tilt: -4 },
  { x: 38, y: 35, scale: 0.62, delay: 1.7, tilt: -15 },
  { x: 62, y: 34, scale: 0.66, delay: 1.9, tilt: 13 },
  { x: 28, y: 52, scale: 0.53, delay: 2.1, tilt: -22 },
  { x: 74, y: 50, scale: 0.56, delay: 2.25, tilt: 19 },
  { x: 47, y: 52, scale: 0.9, delay: 1.2, tilt: -2 },
  { x: 56, y: 54, scale: 0.82, delay: 1.55, tilt: 5 },
  { x: 18, y: 52, scale: 0.42, delay: 2.35, tilt: -28 },
  { x: 84, y: 53, scale: 0.44, delay: 2.5, tilt: 27 },
] as const;
