import Image from "next/image";
import Link from "next/link";

import { PortfolioDataProps } from "@/app/lib/data";
import GradientButton from "@/app/components/common/GradientButton";

export default function WorkIntro({ data }: PortfolioDataProps) {
  return (
    <section className="relative w-full h-dvh">
      <picture>
        <source media="(max-width:1024px)" srcSet={data.thumb.mo.src} />
        <source media="(min-width:1025px)" srcSet={data.thumb.pc.src} />
        <Image
          src={data.thumb.pc}
          alt={data.title}
          fill
          className="object-cover"
        />
      </picture>

      <h1 className="en-h3 capitalize relative text-white px-side pt-[15vh] z-50">
        {data.title}
      </h1>
      <div className="absolute bottom-20 flex flex-row justify-between px-side items-center w-full max-md:flex-col max-md:items-end">
        <ul className="text-white text-start max-md:text-end max-md:mb-xl">
          <li className="kr-b1 mb-xs">
            <span className="inline-block w-16 mr-sm font-regular! max-md:block max-md:mr-0 max-md:w-full">
              기여도
            </span>
            <span className="inline-block max-md:w-full">
              {data.contribution}
            </span>
          </li>
          <li className="kr-b1">
            <span className="inline-block w-16 mr-sm font-regular! max-md:block max-md:mr-0 max-md:w-full">
              기간
            </span>
            <span className="inline-block max-md:w-full">{data.period}</span>
          </li>
        </ul>
        {data.href && (
          <GradientButton
            href={data.href}
            defaultText="visit website"
            hoverText="웹사이트 방문하기"
            buttonStyle="px-ml!"
            defaultTextStyle="en-t2"
            hoverTextStyle="kr-s1"
          />
        )}
      </div>
    </section>
  );
}
