import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cavi Vault Agents — Signature Generator",
  description:
    "Create your branded Cavi Vault Agents email signature in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0b1220] text-white antialiased`}
      >
        <header className="flex items-center gap-3 border-b border-slate-700/50 bg-slate-900/80 px-6 py-3">
          <a
            href="https://www.cavivaultagents.io"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Cavifinal.png"
              alt="Cavi Vault"
              className="h-10 w-10 shrink-0 rounded-lg object-contain"
            />
            <span className="text-base font-semibold text-slate-100">
              CAVI
            </span>
          </a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
