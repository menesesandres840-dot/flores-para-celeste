# Flores para Celeste

Una experiencia romántica interactiva en **un solo proyecto React**: rosas rojas, lluvia de pétalos, luces ambientales, girasoles y una carta sensual con transición animada.

## Estructura limpia

- `client/src/pages/Home.tsx`: lógica de escenas y componentes visuales.
- `client/src/lib/celeste.ts`: nombre, carta y posiciones de las flores.
- `client/src/index.css`: diseño, transiciones y animaciones.
- `.github/workflows/deploy-pages.yml`: publicación automática en GitHub Pages.

## Ejecutar localmente

```bash
pnpm install
pnpm dev
```

Para editar el contenido de la carta, cambia únicamente `LETTER_LINES` en `client/src/lib/celeste.ts`.

La publicación se realiza automáticamente en GitHub Pages después de cada push a `main`.
