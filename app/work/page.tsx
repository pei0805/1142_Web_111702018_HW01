import Image from "next/image";
import Menu from "../../component/Menu";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function work() {
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
                ·ฺ.∗̥ Exhibition ·ฺ.∗̥
              </div>
            </div>
            <div className="text-gray-800 text-center mt-2 text-[16px] ">一些參與過的展</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 px-4 ">

              <div className="group h-48 w-full rounded-2xl bg-[url('/itlab01.jpg')] bg-center bg-cover bg-no-repeat relative lg:col-span-2">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  數位平台第15屆大展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/itlab02.jpg')] bg-center bg-cover bg-no-repeat relative">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  數位平台第15屆大展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/itlab03.jpg')] bg-center bg-cover bg-no-repeat relative">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  數位平台見習小展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/itlab04.jpg')] bg-center bg-cover bg-no-repeat relative">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  數位平台見習小展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/itlab05.jpg')] bg-center bg-cover bg-no-repeat relative">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  數位平台見習小展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/snsd01.jpg')] bg-top bg-cover bg-no-repeat relative">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  少女時代17週年展
                </div>
              </div>

              <div className="group h-48 w-full rounded-2xl bg-[url('/snsd02.jpg')] bg-top bg-cover bg-no-repeat relative lg:col-span-2">
                <div className="text-white bg-black/15 w-full h-[40px]
                            flex justify-center items-center backdrop-blur-sm absolute bottom-0 left-0
                            rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  少女時代17週年展
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
