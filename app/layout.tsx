"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define footer colors per page/route
  const footerColors: Record<string, 'primary-50' | 'gray-50' | 'yellow-50'> = {
    'blog-et-activite': 'yellow-50',
    // Exemple pour utiliser gray-50 sur une autre page :
    // 'nom-de-la-page': 'gray-50',
  };

  // Extract the main route (e.g., 'blog-et-activite' from '/blog-et-activite' or '/(nav-pages)/blog-et-activite')
  const mainRoute = pathname.split('/').filter(Boolean)[0] || '';
  const footerBgColor = footerColors[mainRoute] || 'primary-50';

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer bgColor={footerBgColor} />
      </body>
    </html>
  );
}
