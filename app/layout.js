import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { MouseGlow } from "@/components/site/mouse-glow";
import { CommandPalette } from "@/components/site/command-palette";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://rutvikmakvana.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Rutvik Makvana is a backend and AI engineer building scalable systems, real-time APIs, and production AI integrations.",
  keywords: [
    "Rutvik Makvana",
    "Backend Engineer",
    "AI Engineer",
    "Node.js Developer",
    "RAG",
    "Microservices",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Backend & AI engineer building scalable systems and production AI integrations.",
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Backend & AI engineer building scalable systems and production AI integrations.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

// Set the theme class before paint to avoid a flash of the wrong theme.
const themeScript = `try{const t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <ScrollProgress />
        <MouseGlow />
        <CommandPalette />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-4 sm:px-6 sm:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
