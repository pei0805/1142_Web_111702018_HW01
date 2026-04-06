import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

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
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-blue-100 p-8">
          {/* 左邊 */}
          <div className="bg-white w-[320px] h-full p-4 rounded-2xl">

            <div className="flex justify-center items-center w-full">
              <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
              <Link href="/">
              <Image src="/profile.jpg" alt="profile" width={80} height={80} />
            </Link>
               
              </div>
            </div>

            <h1 className="text-gray-800 text-center mt-2 font-bold text-2xl">許佩穎</h1>
            <div className="text-gray-800 text-center mt-2 text-sm">NCCU PSY | NCCU DCT</div>

            <div className="flex gap-4 justify-center mt-2 text-2xl">

              <div>
                <a href="https://www.instagram.com/pei__ss/" target="_blank" className="transition-transform duration-200 hover:scale-110 inline-block"><FaInstagram /></a>
              </div>


              <div>
                <a href="https://www.linkedin.com/in/pei-ying-hsu-223bbb342/" target="_blank" className="transition-transform duration-200 hover:scale-110 inline-block"><AiOutlineLinkedin /></a>
              </div>
              <div>
                <a href="https://www.youtube.com/@goguma_snsd2425" target="_blank" className="transition-transform duration-200 hover:scale-110 inline-block"><FiYoutube /></a>
              </div>

            </div>

            <Link href="/about">
              <div className="bg-blue-100 p-[24px] mt-3 font-bold rounded-md flex justify-center items-center transition-colors duration-200 hover:bg-blue-200">ABOUT ME</div>
            </Link>

            <Link href="/uxui">
              <div className="bg-blue-100 p-[24px] mt-3 font-bold rounded-md flex justify-center items-center transition-colors duration-200 hover:bg-blue-200">UXUI</div>
            </Link>

            <Link href="/design">
              <div className="bg-blue-100 p-[24px] mt-3 font-bold rounded-md flex justify-center items-center transition-colors duration-200 hover:bg-blue-200">Design</div>
            </Link>




          </div>
          {/* 右邊 */}
          <div className="bg-white w-full h-full rounded-2xl">

            {children}

          </div>
        </div>

      </body>
    </html>
  );
}
