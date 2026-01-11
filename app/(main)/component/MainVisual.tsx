import Image from "next/image";

import DotBackground from "@/public/bg_main_visual.svg";
import SilverAsset from "@/public/img_main_visual_bottom.png";
import CursorIcon from "@/public/ic_cursor.svg";

export default function MainVisual() {
  return (
    <section className="relative w-full h-dvh px-side pt-[12vh]">
      <div className="w-full aspect-128/50 relative">
        <Image
          src={DotBackground}
          alt=""
          fill
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      </div>
      <Image
        src={SilverAsset}
        alt=""
        className="w-2/5 aspect-6/7 absolute top-16 left-1/2 -translate-x-1/2"
      />
      <div className="kr-b1 relative inline-block px-md py-2xs text-white bg-black rounded-[6.25rem] bottom-1/5 left-1/5">
        명확한 기준으로 구조화하는
        <Image
          src={CursorIcon}
          width={24}
          height={24}
          alt=""
          className="absolute -right-6 -top-4 rotate-90"
        />
      </div>
      <div className="kr-b1 relative inline-block px-md py-2xs text-white bg-black rounded-[6.25rem] bottom-3/5 left-7/12">
        <Image
          src={CursorIcon}
          width={24}
          height={24}
          alt=""
          className="absolute -left-6 -top-4 "
        />
        디자이너 홍수빈입니다.
      </div>

      <div className="relative bottom-14">
        <div className="en-h3 stroke-outer text-center">
          Connecting – the Dots
        </div>
        <div className="en-h3 text-black absolute inset-0 text-center">
          Connecting – the Dots
        </div>
      </div>
    </section>
  );
}
