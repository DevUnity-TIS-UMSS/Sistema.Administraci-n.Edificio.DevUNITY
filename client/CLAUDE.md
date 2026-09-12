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

## Colores — regla del proyecto

Sistema de color oficial, definido en [src/app/globals.css](src/app/globals.css) como variables
shadcn (`:root`) y tokens extra en `@theme inline`. No usar valores hexadecimales sueltos en
componentes: siempre a través de estas clases de Tailwind.

| Clase Tailwind | Valor | Uso |
|---|---|---|
| `bg-background` | Zinc 100 `#F4F4F5` | Fondo general (canvas) de toda la aplicación |
| `bg-sidebar` | Zinc 900 `#18181B` | Fondo del panel de navegación lateral |
| `bg-card` | White `#FFFFFF` | Tarjetas de métricas, gráficos, celdas de tabla |
| `border-border` / `border-sidebar-border` | Zinc 200 `#E4E4E7` | Bordes de tarjetas, divisores de filas, separadores |
| `text-foreground` | Zinc 950 `#09090B` | Títulos principales, datos clave en tablas, cifras de KPIs |
| `text-muted-foreground` | Zinc 500 `#71717A` | Subtítulos, labels de KPIs, encabezados de columna |
| `bg-primary` / `text-primary` / `bg-sidebar-primary` | Teal 600 `#0D9488` | Botones primarios, píldora del menú activo |
| `text-accent-secondary` / `bg-accent-secondary` | Indigo 600 `#4F46E5` | Acento secundario para métricas de conteo específicas (ej. total de copropietarios) |
| `text-success` + `bg-success-subtle` | Emerald 600 `#059669` + Emerald 100 `#D1FAE5` | Montos positivos, indicadores al alza, badge "Completado" |
| `text-destructive` + `bg-danger-subtle` | Rose 600 `#E11D48` + Rose 100 `#FFE4E6` | Gastos, morosidad, etiquetas de advertencia |

Regla: no introducir colores fuera de esta paleta sin actualizar primero esta tabla y `globals.css`.
