import Image from "next/image";
import Menu from "../../component/Menu";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function UXUI() {
  return (
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
              ·ฺ.∗̥ UXUI ·ฺ.∗̥
            </div>
          </div>
          <div className="text-gray-700 text-center mt-2 text-[16px] ">
            透過使用者需求分析與介面優化，提升整體操作體驗，並強化資訊傳遞的清晰度與互動性。
          </div>

          <div className="grid grid-rows-4 gap-6 mt-2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-6 bg-amber-50 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:scale-105">

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image src="/uxui01.png" alt="徙巷餐酒館" fill className="object-cover" />
                </div>
              </div>


              <div className="text-center md:text-left">
                <div className="text-gray-900 font-bold text-xl md:text-2xl">
                  徙巷餐酒館
                </div>

                <div className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
                  透過訪談發現店家重複訊息耗時，高峰易漏訊，而顧客常找不到最新資訊，進而透過設計設計一套溫暖且自動化的系統，實現高效且有溫度的溝通體驗。
                </div>
              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-6 bg-amber-50 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:scale-105">

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image src="/uxui02.png" alt="Google Maps Redesign" fill className="object-cover" />
                </div>
              </div>


              <div className="text-center md:text-left">
                <div className="text-gray-900 font-bold text-xl md:text-2xl">
                  Google Maps Redesign
                </div>

                <div className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
                  銀髮族常因資訊密度高，導致使用產生緊張、挫敗感，透過降低資訊負荷與提供引導，提升銀髮族導航成功率與安心感，重新打造銀髮族友善的地圖 APP。
                </div>
              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-6 bg-amber-50 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:scale-105">

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image src="/uxui03.png" alt="政大通阿通聊天機器人" fill className="object-cover" />
                </div>
              </div>


              <div className="text-center md:text-left">
                <div className="text-gray-900 font-bold text-xl md:text-2xl">
                  政大通阿通聊天機器人
                </div>

                <div className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
                  與前端及PM協作，重新規劃聊天機器人操作流程與介面架構，且設計可用性測試架構與訪談指引，預計於正式上線後進行成效驗證。
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-6 bg-amber-50 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:scale-105">

              <div className="w-full flex justify-center md:justify-start">
                <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image src="/uxui04.png" alt="消防e點通 Redesign" fill className="object-cover" />
                </div>
              </div>


              <div className="text-center md:text-left">
                <div className="text-gray-900 font-bold text-xl md:text-2xl">
                  消防e點通 Redesign
                </div>

                <div className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
                  原先介面功能多元、混亂，使用者無法快速找到需要資訊，為了提供使用者安全、可靠及安心的防災服務將介面重新調整設計。
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
