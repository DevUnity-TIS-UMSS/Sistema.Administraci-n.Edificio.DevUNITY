import type { Metadata } from "next";
import { fontTitle, fontSubtitle, fontBody, fontCaption } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Administración Edificio",
  description: "Panel administrativo para la gestión de edificios y residentes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fontTitle.variable} ${fontSubtitle.variable} ${fontBody.variable} ${fontCaption.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
