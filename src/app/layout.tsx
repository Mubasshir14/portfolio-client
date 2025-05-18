import type { Metadata } from "next";
import { Arima, Lobster, Oleo_Script, Sansita } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CanvasCursor from "@/components/CanvasCursor";
import Navbar from "@/Portfolio/Navbar";
import { Toaster } from "sonner";
import { Footer } from "@/Portfolio/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const arima = Arima({
  variable: "--font-arima",
  subsets: ["latin"],
});

const oleo_script = Oleo_Script({
  variable: "--font-oleo_script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio and Blog Website",
  description:
    "Professional frontend developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and blog posts.",
  keywords: [
    "full stack developer",
    "MERN stack developer",
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "UI/UX designer",
    "portfolio",
    "Mubasshir",
  ],
  openGraph: {
    title: "Portfolio and Blog Website",
    description:
      "Professional full stack developer specializing in React, Next.js, and modern web technologies.",
    url: "https://developer-portfolio-eta-two.vercel.app/",
    siteName: "Mubasshir Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mubasshir - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubasshir | Full Stack Developer",
    description:
      "Professional Full Stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Mubasshir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${sansita.variable} ${arima.variable} ${oleo_script.variable} ${lobster.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster position="top-right" />
          <CanvasCursor />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}


