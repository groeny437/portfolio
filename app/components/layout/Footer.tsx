import Image from "next/image";

import starIcon from "@/public/ic_star.svg";
import DotBg from "@/public/bg_contact.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-dvh  relative">
      <h2 className="flex items-center mb-ml point-t2 text-center text-gray-500 uppercase">
        <i className="inline-block w-2 h-2 mr-xs bg-black "></i>
        contact
      </h2>
      <div className="en-h4 flex flex-row flex-wrap gap-x-5 justify-center text-center z-10  px-side ">
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm">
          if you
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm">
          wish
        </span>
        <span className="basis-full block max-md:hidden" />
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm">
          to
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm">
          reach me,
        </span>
        <span className="basis-full" />
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm">
          please
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase max-md:inline-block max-md:mb-sm max-md:leading-15.5">
          click
        </span>
        <a className="relative inline-flex items-center justify-center px-xl py-sm min-h-[clamp(1rem,calc(var(--font-size-num-80)/1440*100vw),var(--font-size-80))] aspect-4/1 gap-2 bg-white border border-black rounded-[6.25rem] mb-ml bg-[linear-gradient(98deg,#9A9A9A_0%,#434343_50%,#9A9A9A_100%)] bg-clip-text text-transparent capitalize cursor-pointer before:content-['here'] hover:before:content-['여기'] hover:font-bold hover:text-56 max-md:aspect-auto max-md:before:content-['여기'] max-md:text-36 max-md:px-ml max-md:mb-sm max-md:font-semibold">
          {" "}
          <Image
            src={starIcon}
            alt=""
            width={40}
            height={40}
            className="inline-block max-md:w-5 max-md:h-5"
          />
        </a>
        <span className="basis-full" />
        <span className="uppercase">to connect</span>
      </div>
      <p className="flex justify-between w-full px-side absolute bottom-xl en-b1 uppercase text-gray-500">
        <span className="font-normal">ui∙ux design</span>
        <span className="font-normal">2026 subin</span>
      </p>
      <Image src={DotBg} alt="" className=" absolute bottom-0 z-0" />
    </footer>
  );
}
