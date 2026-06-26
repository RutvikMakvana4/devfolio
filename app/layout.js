'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./globals.css";
import { Button } from "@/components/ui/button";
import { LuMoon, LuSun } from 'react-icons/lu';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="min-h-screen flex flex-col">
          <nav className="py-6 transition-colors duration-300 sticky top-0 bg-background/95 backdrop-blur">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 flex justify-between items-center">
              <Link href="/" className="font-semibold text-lg hover:opacity-70 transition-opacity">
                RM
              </Link>
              <div className="flex gap-8 items-center">
                <div className="flex gap-6 text-sm">
                  <Link 
                    href="/" 
                    className={`transition-all ${isActive('/') ? 'font-semibold drop-shadow-lg' : 'hover:opacity-60'}`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/projects" 
                    className={`transition-all ${isActive('/projects') ? 'font-semibold drop-shadow-lg' : 'hover:opacity-60'}`}
                  >
                    Projects
                  </Link>
                  <Link 
                    href="/blog" 
                    className={`transition-all ${isActive('/blog') ? 'font-semibold drop-shadow-lg' : 'hover:opacity-60'}`}
                  >
                    Blog
                  </Link>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleTheme}
                  disabled={!mounted}
                  className="p-2 h-auto w-auto hover:bg-transparent transition-opacity disabled:cursor-default"
                >
                  {theme === 'light' ? (
                    <LuMoon className="w-4 h-4" />
                  ) : (
                    <LuSun className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </nav>

          <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-12">
            {children}
          </main>

          <footer className="py-6 mt-auto transition-colors duration-300">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}