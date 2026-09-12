@AGENTS.md

## Tipografía — regla del proyecto

Familia oficial: **TT Interphases Pro**, autoalojada vía `next/font/local` en
[src/app/fonts.ts](src/app/fonts.ts) (archivos `.ttf` en `src/app/fonts/`). No usar otras
familias tipográficas ni pesos fuera de esta jerarquía sin actualizar ese archivo primero.

`--font-sans` (el default del body en todo el proyecto) apunta a Texto General.

| Token Tailwind | Archivo fuente | Peso | Tamaño | Line-height | Tracking | Uso |
|---|---|---|---|---|---|---|
| `font-title` | Black / Black Italic | 700 | 18-28px | 120% | -1.5% | H1 de vista activa, modales críticos, cifras de tarjetas KPI, Hero |
| `font-subtitle` | Mono Bold / Mono Italic | 600 (o 500) | 14-16px | 130% | -0.5% | Encabezados de tarjetas/widgets, agrupadores de formularios, tabs activos |
| `font-body` (= `font-sans`) | Light / Light Italic | 400 | 13-14px | 140-150% | 0% | Tablas, inputs, botones, párrafos, navegación — estilo por defecto |
| `font-caption` | Thin / Thin Italic | 400 (o 300), color atenuado `neutral-500` | 11-12px | 130% | +1% | Headers de tabla, timestamps, texto de ayuda, badges, footer |

Regla: solo debe existir un H1 (`font-title`) visible por pantalla.
