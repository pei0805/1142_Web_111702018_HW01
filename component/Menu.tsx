import Image from "next/image";
import Link from "next/link";
import { FaHome, FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";


export default function Menu() {
  return (
    <>
      <div className="min-h-screen flex items-start justify-center px-4 pt-10">
        <div className="bg-white w-[320px] h-full p-4">

          <Link href="/" className="sm:hidden bg-[#7181c8] p-3 rounded-full inline-flex items-center justify-center fixed top-12 left-12 z-9999">
            <FaHome className="text-white text-xl" />
          </Link>

          <div className="flex justify-center items-center w-full">
            <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
              <Link href="/">
                <Image src="/profile.jpg" alt="profile" width={80} height={80} />
              </Link>

            </div>
          </div>

          <div className="text-gray-800 text-center mt-2 font-bold text-2xl">許佩穎</div>
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
            <div className="bg-[#b7d3f4] p-[24px] mt-3 font-bold rounded-md flex justify-center items-center 
                  transition-colors duration-200 hover:bg-[#7181c8] hover:text-white
   ">
              ‧₊˚.⋆·ฺ.∗̥ ABOUT ME ‧₊˚.⋆·ฺ.∗̥
            </div>
          </Link>

          <Link href="/uxui">
            <div className="bg-[#b7d3f4] p-[24px] mt-3 font-bold  rounded-md flex justify-center items-center 
                  transition-colors duration-200 hover:bg-[#7181c8] hover:text-white
  ">

              ‧₊˚.⋆·ฺ.∗̥ UXUI ‧₊˚.⋆·ฺ.∗̥
            </div>
          </Link>

          <Link href="/design">
            <div className="bg-[#b7d3f4] p-[24px] mt-3 font-bold rounded-md flex justify-center items-center 
                  transition-colors duration-200 hover:bg-[#7181c8] hover:text-white
  ">
              ‧₊˚.⋆·ฺ.∗̥ Design ‧₊˚.⋆·ฺ.∗̥
            </div>
          </Link>

          <Link href="/work">
            <div className="bg-[#b7d3f4] p-[24px] mt-3 font-bold rounded-md flex justify-center items-center 
                  transition-colors duration-200 hover:bg-[#7181c8] hover:text-white
  ">

              ‧₊˚.⋆·ฺ.∗̥ Exhibition ‧₊˚.⋆·ฺ.∗̥

            </div>
          </Link>


        </div>
      </div>
    </>
  );
}
