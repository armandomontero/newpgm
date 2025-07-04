import type { Metadata}  from "next";
import { Noto_Sans_Display } from "next/font/google";

import { ClerkProvider } from '@clerk/nextjs';
import { esMX } from '@clerk/localizations';

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";
const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PGM - Gestión de Centros Médicos",
  description: "Desarrollado por Infoclever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esMX} >
    <html lang="es">
      <body className={noto.className}>
      <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
