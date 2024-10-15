import React from "react";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://trve.in"),
  title: "Marcos Lima - Father, runner, cyclist, skateboarder & senior developer.",
  description:
    "marcos lima, father, cyclist, skateboarder, senior developer",
  openGraph: {
    type: "website",
    siteName: "Marcos Lima",
    locale: "pt_BR",
    url: "https://trve.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image of Marcos Lima - Father, runner, cyclist, skateboarder & senior developer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skvggor",
    title: "Marcos Lima - Father, runner, cyclist, skateboarder & senior developer.",
    description: "Father, runner, cyclist, skateboarder & senior developer.",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={ jost.className }>
        { children }
      </body>
    </html>
  );
}
