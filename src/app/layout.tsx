import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalvin Naeya Wedding",
  description:
    "Undangan pernikahan Kalvin Al Ma'ruf dan Naeya Ashyfa Ocwita Ningrum. Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dan memberikan doa restu.",
  keywords: [
    "Kalvin Naeya Wedding",
    "Undangan Pernikahan",
    "Wedding Invitation",
    "Kalvin Al Ma'ruf",
    "Naeya Ashyfa Ocwita Ningrum",
  ],
  authors: [{ name: "Kalvin Al Ma'ruf" }],
  creator: "Kalvin Al Ma'ruf",
  publisher: "Kalvin Naeya Wedding",
  openGraph: {
    title: "Kalvin Naeya Wedding",
    description:
      "Undangan pernikahan Kalvin Al Ma'ruf dan Naeya Ashyfa Ocwita Ningrum.",
    type: "website",
    locale: "id_ID",
    siteName: "Kalvin Naeya Wedding",
    images: [
      {
        url: "/images/foto-1.jpg",
        width: 1200,
        height: 630,
        alt: "Kalvin Naeya Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalvin Naeya Wedding",
    description:
      "Undangan pernikahan Kalvin Al Ma'ruf dan Naeya Ashyfa Ocwita Ningrum.",
    images: ["/images/foto-1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff3f8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#fff3f8] font-sans text-[#5b2338]">
        {children}
      </body>
    </html>
  );
}