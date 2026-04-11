import Link from "next/link";
import Menu from "../../component/Menu";
import { FaHome } from "react-icons/fa";

export default function Design() {
  return (
    <div className="flex h-full">
      <Link href="/" className=" sm:hidden bg-[#7181c8] p-3 rounded-full inline-flex items-center justify-center fixed top-12 left-12 z-9999">
        <FaHome className="text-white text-xl" />
      </Link>
      <div className="sm:block hidden">
        <Menu />
      </div>
      <div className="w-full">
        <div className="w-full p-4">
          <div className="relative text-center mt-2 font-bold text-[32px] text-gray-800">

            <img
              src="/sea.jpg"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 pointer-events-none"
            />

            <div className="text-[#2a3254] relative z-10">
              ·ฺ.∗̥ Design ·ฺ.∗̥
            </div>
          </div>
          <div className="text-gray-700 text-center mt-2 text-[16px] ">
            以多元主題與風格的探索，延伸平面設計創作，涵蓋品牌視覺、宣傳物設計等面向，強化整體視覺表現與應用能力。
          </div>

          <div className="flex flex-col gap-6 mt-4 px-4">
            <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center shadow-md">
              <div className="h-full w-full rounded-2xl">
                <div className="text-gray-800 text-left font-bold mt-4 text-[24px] pl-3">數位平台 ITLab 第15屆年度大展主視覺</div>

                <div className="text-gray-800 text-left mt-2 text-[16px] pl-3">
                  展覽涵蓋從社會議題到日常小事的多種詮釋，內外在碰撞，審視個體與集體交融中自我意識形塑。
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 px-2 pb-2">
                  <div className="group h-48 w-full rounded-2xl bg-[url('/ITLABBanner.png')] bg-black bg-center bg-contain bg-no-repeat relative lg:col-span-3">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Banner 設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/poster.png')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      海報設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/sticker.png')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      貼紙設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/IG.png')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      貼文設計
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center shadow-md">
              <div className="h-full w-full rounded-2xl">
                <div className="text-gray-800 text-left font-bold mt-4 text-[24px] pl-3">實習通 InternX</div>

                <div className="text-gray-800 text-left mt-2 text-[16px] pl-3">
                  實習通提供學生完善的職涯發展工具，透過多元功能解決實習資訊斷裂與人才媒合的痛點。於團隊內以目標受眾進行發想，設計專屬於實習通的品牌吉祥物，並延伸應用於網站視覺與社群貼文中。
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 px-2 pb-2">
                  <div className="group h-44 w-full rounded-2xl bg-[url('/internX03.png')] bg-center bg-cover bg-no-repeat relative lg:col-span-2">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      貼文設計
                    </div>
                  </div>

                  <div className="group h-44 w-full rounded-2xl bg-[url('/internX04.png')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      易開展架
                    </div>
                  </div>

                  <div className="group h-44 w-full rounded-2xl bg-[url('/internX02.png')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      網站視覺設計
                    </div>
                  </div>

                  <div className="group h-44 w-full rounded-2xl bg-[url('/interX.png')] bg-center bg-cover bg-no-repeat relative lg:col-span-2">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      心理測驗設計
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center shadow-md">
              <div className="h-full w-full rounded-2xl">
                <div className="text-gray-800 text-left font-bold mt-4 text-[24px] pl-3">明星應援物</div>

                <div className="text-gray-800 text-left mt-2 text-[16px] pl-3">
                  設計發想取自藝人之音樂作品與形象特色，延伸出具代表性的色彩與圖像元素。
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 px-2 pb-2">
                  <div className="group h-48 w-full rounded-2xl bg-[url('/taeyeon.jpg')] bg-black bg-top bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      太妍演唱會書籤應援設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/snsd.png')] bg-center bg-cover bg-no-repeat relative lg:col-span-2">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      少女時代17週年展
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/yuri.jpg')] bg-[#3b393e] bg-center bg-contain bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      俞利見面會票夾設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/card.jpg')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      小卡設計
                    </div>
                  </div>

                  <div className="group h-48 w-full rounded-2xl bg-[url('/tapestry.jpg')] bg-center bg-cover bg-no-repeat relative">
                    <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      掛布設計
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  );
}
