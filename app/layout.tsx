import type { Metadata } from "next";
import { Geist, Geist_Mono, Style_Script, Tajawal, Cairo, Amiri } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  display: "swap",
});
const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  display: "swap",
});
const styleScript = Style_Script({
  variable: "--font-style-script",
  weight: ["400"],
  subsets: ["latin"],
  display:"swap"
});

const tajawal = Tajawal({
  variable: "--font-arabic",
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  display: "swap",
});
// Removed unused Story Script font to avoid fallback-generation warnings

export const metadata: Metadata = {
  title: "PrintHub NextJS Project",
  description: "PrintHub NextJS Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} ${cairo.variable} ${amiri.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
