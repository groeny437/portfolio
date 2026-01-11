import Image from "next/image";

import TitleImg from "@/public/img_main_intro_title.svg";
import PuzzleImg from "@/public/img_about.jpg";

export default function MainAbout() {
  return (
    <section className="bg-black flex flex-col justify-end pb-16 w-full h-dvh px-2xl ">
      <div className="w-2/5">
        <Image src={TitleImg} alt="" className="w-full" />
        <p className="kr-t3 w-9/10 mt-ml text-gray-100">
          저는 흩어진 요소를 연결할 패턴을 찾는 디자이너입니다.
        </p>
      </div>
      <div className="flex items-end ">
        <p className="inline-block kr-b1 text-gray-200 w-1/2 pr-xl text-end">
          아이디어, 데이터, 형태처럼 흩어져 있는 조각들을 관찰하고,
          <br />
          그 안에 숨어 있는 구조와 흐름을 발견해
          <br />
          하나의 일관된 체계로 정리해내는 과정에 집중합니다.
        </p>
        <Image src={PuzzleImg} alt="" className="w-1/2 " />
      </div>
    </section>
  );
}
