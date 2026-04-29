import type { Metadata } from "next";
import { Fraunces, Archivo, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const archivo = Archivo({
  subsets: ["latin", "vietnamese"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paulvante — Gieo Tương Lai Bằng Nông Nghiệp Bền Vững",
  description:
    "Paulvante kết hợp công nghệ hiện đại và phương pháp bền vững để giúp nông dân canh tác thông minh hơn, nhanh hơn và xanh hơn.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${archivo.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-cream-50 text-ink antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
