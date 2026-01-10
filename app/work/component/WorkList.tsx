import Image from "next/image";
import Link from "next/link";

import { WorkListProps } from "@/app/lib/data";

import oTextIcon from "@/public/img_o_default.svg";

export default function WorkList({ data }: WorkListProps) {
  return (
    <section>
      <div className="flex flex-wrap items-end gap-x-2xl gap-y-xl px-side pt-2xl pb-xl max-md:gap-x-0">
        <h1 className="inline-flex flex-wrap items-center gap-x-ml en-h3 max-md:w-full">
          <span>My</span>
          <span className="inline-block w-10 h-2.25 bg-black"></span>
          <span className="max-md:block max-md:w-full max-md:text-end">
            W
            <Image
              src={oTextIcon}
              width={66}
              height={66}
              alt=""
              className="inline-block max-md:w-10 max-md:h-10"
            />
            rk
          </span>
        </h1>
        <div className="inline-block kr-b1 text-gray-300 pb-xs max-md:w-full">
          <p>
            <b className="text-black font-regular">
              흩어진 아이디어 속에서 숨겨진 패턴을 발견
            </b>
            하고,
          </p>
          <p>
            이를 하나의{" "}
            <b className="text-black font-regular">명확한 시스템으로 구축</b>해
            온 결과물입니다.
          </p>
        </div>
      </div>

      <div className="px-side py-xl">
        <ul className="w-full flex flex-wrap gap-x-xl gap-y-2xl max-md:flex-col max-md:gap-x-0">
          {[...data].reverse().map((item, i) => {
            return (
              <li
                className="w-[calc(50%-var(--space-xl)/2)] max-md:flex-none max-md:w-full"
                key={i}
              >
                <article className="w-full h-full border border-black">
                  <Link href={`/work/${item.id}`} className="w-full h-full">
                    <div className="bg-gray-200 relative w-full aspect-62/32"></div>
                    <div className="bg-black p-ml">
                      <h2 className="en-s1 text-white uppercase pb-sm border-b border-gray-400">
                        {item.title}
                      </h2>
                      <p className="kr-b1 text-gray-200 pt-sm">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
