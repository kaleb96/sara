import sara_logo from "@/assets/sara_logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-flow-col items-center place-content-between px-16">
      <div className="flex flex-row">
        <Bars3Icon className="w-16 cursor-pointer" />
        <Image src={sara_logo} width={262} alt="sara_logo" />
      </div>
      {/* TODO: 헤더 검색,로그인, 관련 부분 임시 하드코딩 */}
      <div className="flex flex-row">
        <button className="mr-14 w-45 h-8 text-left border-b border-black-500 cursor-pointer focus:border-pink-500 outline-none">
          검색
        </button>
        <div className="grid grid-flow-col gap-6">
          <span className="cursor-pointer">로그인</span>
          <span className="cursor-pointer">도움말</span>
          <span className="cursor-pointer">
            바스켓 백<b>[0]</b>
          </span>
        </div>
      </div>
    </div>
  );
}
