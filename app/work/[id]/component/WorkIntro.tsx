import Image from "next/image";
import Link from "next/link";

import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkIntro({ data }: PortfolioDataProps) {
  return (
    <section className="relative bg-gray-200 w-full h-dvh">
      {/* <Image /> */}
      <h1 className="en-h3 capitalize text-white px-side pt-[15vh]">
        {data.title}
      </h1>
      <div className="absolute bottom-20 flex flex-row justify-between px-side items-center w-full max-md:flex-col max-md:items-end">
        <ul className="text-white text-start max-md:text-end max-md:mb-xl">
          <li className="kr-b1 mb-xs">
            <span className="inline-block w-16 mr-sm max-md:block max-md:mr-0 max-md:w-full">
              기여도
            </span>
            <span className="inline-block max-md:w-full font-medium">
              {data.contribution}
            </span>
          </li>
          <li className="kr-b1">
            <span className="inline-block w-16 mr-sm max-md:block max-md:mr-0 max-md:w-full">
              기간
            </span>
            <span className="inline-block max-md:w-full font-medium">
              {data.period}
            </span>
          </li>
        </ul>
        {data.href && (
          <Link
            href={data.href}
            target="_blank"
            className="relative en-t2 px-ml py-sm w-auto h-14 aspect-6/1 box-border flex items-center justify-center bg-white border border-white rounded-[6.25rem] capitalize group max-md:aspect-auto "
          >
            <span className="en-t2 gradient-text uppercase transition-opacity duration-300 inline-block group-hover:hidden max-md:hidden">
              visit website
            </span>
            <span className="kr-s1 gradient-text transition-opacity duration-300 hidden group-hover:inline-block max-md:inline-block">
              웹사이트 방문하기
            </span>
            <i className="star-icon ml-sm"></i>
          </Link>
        )}
      </div>
    </section>
  );
}
