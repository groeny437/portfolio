import Image from "next/image";

import MenuIcon from "@/public/ic_menu.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-end w-full pt-ml px-side max-md:items-center">
      <h1 className="en-s1 uppercase inline-block">portfolio</h1>
      <nav className="inline-block ml-auto">
        <ul className="inline-flex gap-xs en-b1 capitalize font-medium max-md:hidden ">
          <li className="border border-gray-200 px-md py-xs rounded-[6.25rem] leading-normal">
            work
          </li>
          <li className="bg-black text-white px-md py-xs rounded-[6.25rem] leading-normal">
            get in touch
          </li>
        </ul>
        <button className="hidden max-md:inline-flex items-center en-b1 border border-gray-200 px-md py-xs rounded-[6.25rem] leading-normal capitalize cursor-pointer">
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
