import localFont from "next/font/local";

/**
 * Jerarquía tipográfica oficial — TT Interphases Pro.
 * Referencia única para todo el proyecto (Panel, Landing, App). No usar otras
 * familias ni pesos fuera de estos 4 niveles sin actualizar este archivo.
 */

// TÍTULOS — Bold 700 | 18-28px | line-height 120% | tracking -1.5%
// H1 de vista activa, encabezados de modales críticos, cifras de tarjetas KPI, Hero.
export const fontTitle = localFont({
  src: [
    { path: "./fonts/TT Interphases Pro Trial Black.ttf", weight: "700", style: "normal" },
    { path: "./fonts/TT Interphases Pro Trial Black Italic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-title-raw",
  display: "swap",
});

// SUBTÍTULOS — SemiBold 600 | 14-16px | line-height 130% | tracking -0.5%
// Encabezados de tarjetas/widgets, agrupadores de formularios, tabs activos.
export const fontSubtitle = localFont({
  src: [
    { path: "./fonts/TT Interphases Pro Mono Trial Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/TT Interphases Pro Mono Trial Italic.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-subtitle-raw",
  display: "swap",
});

// TEXTO GENERAL — Regular 400 | 13-14px | line-height 140-150% | tracking 0%
// Estilo por defecto del sistema: tablas, inputs, botones, párrafos, navegación.
export const fontBody = localFont({
  src: [
    { path: "./fonts/TT Interphases Pro Trial Light.ttf", weight: "400", style: "normal" },
    { path: "./fonts/TT Interphases Pro Trial Light Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-body-raw",
  display: "swap",
});

// TEXTO SECUNDARIO — Regular 400 (color atenuado) | 11-12px | line-height 130% | tracking +1%
// Encabezados de columnas, timestamps, ayuda/validación, footer, badges.
export const fontCaption = localFont({
  src: [
    { path: "./fonts/TT Interphases Pro Trial Thin.ttf", weight: "400", style: "normal" },
    { path: "./fonts/TT Interphases Pro Trial Thin Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-caption-raw",
  display: "swap",
});
