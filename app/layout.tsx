import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "許佩穎的個人履歷",
  description: "許佩穎的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-[url('/background.jpg')] bg-center bg-cover bg-no-repeat p-8">
          {/* 左邊 */}
          
          {/* 右邊 */}
          <div className="bg-white w-full h-full rounded-2xl relative overflow-auto">

            {children}

          </div>
        </div>

      </body>
    </html>
  );
}
