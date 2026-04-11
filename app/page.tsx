import Image from "next/image";
import Link from "next/link";
import Shuffle from '@/components/Shuffle';
import Menu from "../component/Menu";
import { FaHome } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <div className="flex h-full w-full">


        <Link href="/" className=" sm:hidden bg-[#7181c8] p-3 rounded-full inline-flex items-center justify-center fixed top-12 left-12 z-9999">
          <FaHome className="text-white text-xl" />
        </Link>
        <div>

          <Menu />
        </div>

        <div className="w-full sm:block hidden">
          <div className=" flex flex-col items-center justify-center min-h-screen text-center space-y-2">


          </div>
        </div>
      </div>
    </>
  );
}
