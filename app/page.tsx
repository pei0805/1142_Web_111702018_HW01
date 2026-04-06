import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full">
      {/* 左邊 */}
      <div className="bg-white w-[320px] h-full p-4">

        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
          <Image src="/profile.jpg" alt="profile" width={80} height={80}/>
        </div>
        <div className="text-center">許佩穎</div>
        <div className="text-center">NCCU PSY | NCCU DCT</div>

        <div className="flex gap-2 justify-center">
          <div>Instgram</div>
          <div>Email</div>
          <div>Youtube</div>

        </div>
        <div className="bg-gray-300 p-[16px] rounded-md">ABOUT ME</div>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">UXUI</div>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">Graphic Design</div>

      </div>
      {/* 右邊 */}
      <div className="bg-gray-200 w-full h-full">右邊</div>
    </div>
  );
}
