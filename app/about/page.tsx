import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu";
import { FaHome } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="flex h-full">

        <Link href="/" className=" sm:hidden bg-[#7181c8] p-3 rounded-full inline-flex items-center justify-center fixed top-12 left-12 z-9999">
          <FaHome className="text-white text-xl" />
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="w-full">
          <div className="w-full p-3">
            <div className="relative text-center mt-2 font-bold text-[32px] text-gray-800">

              <img
                src="/sea.jpg"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 pointer-events-none"
              />

              <div className="text-[#2a3254] relative z-10">
                ·ฺ.∗̥ About Me ·ฺ.∗̥
              </div>
            </div>


            <div className="flex gap-10 mt-6 px-4">
              <div className="w-1/2 ">
                <div className="text-[#4f5a8d] font-bold text-[20px]">Education</div>
                <div className="p-2">
                  <ul className="list-outside list-disc space-y-2 pl-5 text-[16px] leading-relaxed text-gray-700">
                    <li>國立政治大學 心理學系</li>
                    <li>國立政治大學 數位內容與科技學士學位學程</li>
                  </ul>
                </div>

                <div className="text-[#4f5a8d] font-bold text-[20px]">Skills</div>
                <div className="p-2 flex flex-wrap gap-2">
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">Figma</button>
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">Illustrator</button>
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">Photoshop</button>
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">InDesign</button>
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">Blender</button>
                  <button className="bg-transparent border-[#7181c8] text-[#7181c8] border px-4 py-1 rounded-full text-sm font-bold">MS Office</button>
                </div>

                <div className="text-[#4f5a8d] font-bold text-[20px]">Photo</div>
                <div className="p-2 flex flex-wrap gap-4">
                  <div className="relative shrink-0 bg-gray-200 w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-md">
                    <Image src="/photo01.jpg" alt="About Me" fill className="object-cover" sizes="120px" />
                  </div>

                  <div className="relative shrink-0 bg-gray-200 w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-md">
                    <Image src="/photo02.jpg" alt="About Me" fill className="object-cover" sizes="120px" />
                  </div>

                  <div className="relative shrink-0 bg-gray-200 w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-md">
                    <Image src="/photo03.jpg" alt="About Me" fill className="object-cover" sizes="120px" />
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <div className="text-[#4f5a8d] font-bold text-[20px]">Experience</div>
                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">職途有限公司（實習通）行銷與設計</div>
                  <div className="text-gray-700 font-light text-[12px]">2025.10-NOW</div>
                </div>

                <hr className="border-t-0.5 border-gray-400"></hr>

                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">政大通 UXUI 組</div>
                  <div className="text-gray-700 font-light text-[12px]">2025.09-NOW</div>
                </div>

                <hr className="border-t-0.5 border-gray-400 "></hr>

                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">十一百造股份有限公司  暑期平面設計實習生</div>
                  <div className="text-gray-700 font-light text-[12px]">2025.07-2025.08</div>
                </div>

                <hr className="border-t-0.5 border-gray-400"></hr>

                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">XChange 互聯網大學 UXUI 組</div>
                  <div className="text-gray-700 font-light text-[12px]">2024.12-2025.06</div>
                </div>

                <hr className="border-t-0.5 border-gray-400"></hr>

                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">傳播學院實習平台年度大展主視覺與行銷組</div>
                  <div className="text-gray-700 font-light text-[12px]">2024.08-2024.12</div>
                </div>

                <hr className="border-t-0.5 border-gray-400"></hr>

                <div className="p-2">
                  <div className="text-gray-800 font-bold text-[16px]">傳播學院實習平台教學組長</div>
                  <div className="text-gray-700 font-light text-[12px]">2024.01-2025.01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>

  );
}
