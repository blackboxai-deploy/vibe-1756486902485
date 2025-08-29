import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koperasi Simpan Pinjam Syariah",
  description: "Lembaga keuangan syariah terpercaya yang berkomitmen memberikan layanan terbaik sesuai prinsip Islam",
  keywords: "koperasi syariah, simpan pinjam syariah, murabaha, mudharabah, wadiah, keuangan islami",
  authors: [{ name: "Koperasi Simpan Pinjam Syariah" }],
  creator: "Koperasi Simpan Pinjam Syariah",
  publisher: "Koperasi Simpan Pinjam Syariah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://koperasisyariah.id",
    title: "Koperasi Simpan Pinjam Syariah",
    description: "Layanan keuangan syariah terpercaya sesuai prinsip Islam",
    siteName: "Koperasi Syariah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koperasi Simpan Pinjam Syariah",
    description: "Layanan keuangan syariah terpercaya sesuai prinsip Islam",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}