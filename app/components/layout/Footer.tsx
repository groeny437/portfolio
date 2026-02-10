import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import GradientButton from "../common/GradientButton";

import starIcon from "@/public/ic_star.svg";
import DotBg from "@/public/bg_contact.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-dvh  relative">
      <SectionTitle title="contact" />
      <div className="en-h4 flex flex-row flex-wrap gap-x-5 justify-center text-center z-10  px-side mt-ml">
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm">
          if you
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm">
          wish
        </span>
        <span className="basis-full block max-md:hidden" />
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm">
          to
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm">
          reach me,
        </span>
        <span className="basis-full" />
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm">
          please
        </span>
        <span className="basis-full hidden max-md:block" />
        <span className="mb-ml uppercase inline-flex items-center max-md:mb-sm max-md:leading-15.5">
          click
        </span>
        <GradientButton
          defaultText="here"
          hoverText="여기"
          buttonStyle="px-xl mb-ml"
          defaultTextStyle="en-h4"
          hoverTextStyle="kr-t1"
        />
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
