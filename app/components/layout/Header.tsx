import Image from "next/image";

import MenuIcon from "@/public/ic_menu.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between fixed z-50 items-end w-full pt-ml px-side max-md:items-center">
      <h1 className="en-s1 uppercase inline-block text-white">portfolio</h1>
      <nav className="inline-block ml-auto">
        <ul className="inline-flex gap-xs en-b1 capitalize font-medium max-md:hidden ">
          <li className="bg-white border border-gray-200 px-md py-xs rounded-[6.25rem] leading-normal">
            <Link href={"/work"}>work</Link>
          </li>
          <li className="bg-black text-white px-md py-xs rounded-[6.25rem] leading-normal">
            <Link href={"/contact"}>get in touch</Link>
          </li>
        </ul>
        <button className="hidden max-md:inline-flex items-center en-b1 border border-gray-200 px-md py-xs rounded-[6.25rem] leading-normal bg-white capitalize cursor-pointer">
          menu
          <Image
            src={MenuIcon}
            alt=""
            width={24}
            height={24}
            className="inline-block ml-xs"
          />
        </button>
      </nav>
    </header>
  );
}
