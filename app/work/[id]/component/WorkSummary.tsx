import Image from "next/image";

import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkSummary({ data }: PortfolioDataProps) {
  return (
    <section className="w-2/3 ml-auto px-[8vw] max-md:w-full max-md:px-side">
      <article className="pb-20 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
        <span className="point-t2 text-gray-500 uppercase md:hidden">
          <i className="square-box"></i> insight
        </span>
        <p className="kr-b1 mb-2xl text-gray-400 max-md:mt-4">
          {data.insight.summary}
        </p>
        <ul className="kr-b1">
          <li className="flex py-9 px-md border-b border-t border-gray-200">
            <span className="mr-2">①</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[0]}
            </span>
          </li>
          <li className="flex py-9 px-md border-b border-gray-200">
            <span className="mr-2">②</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[1]}
            </span>
          </li>
          <li className="flex py-9 px-md border-b border-gray-200">
            <span className="mr-2">③</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[2]}
            </span>
          </li>
        </ul>
      </article>
      <article className="pt-20 pb-36 max-md:pt-0 max-md:pb-0 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
        <span className="point-t2 text-gray-500 uppercase md:hidden">
          <i className="square-box"></i> Design Keyword
        </span>
        <p className="kr-b1 mb-2xl text-gray-400 max-md:mt-4">
          {data.design.summary}
        </p>
        <div className="w-full aspect-92/28 bg-gray-100 max-md:aspect-33/28"></div>
      </article>
      <article className="pt-36 pb-64 max-md:pt-0 max-md:pb-0 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
        <span className="point-t2 text-gray-500 uppercase md:hidden">
          <i className="square-box"></i> style guide
        </span>
        <p className="kr-b1 mb-2xl text-gray-400 max-md:mt-4">
          {data.style.summary}
        </p>
        <div className="w-full border-t border-gray-200 max-md:border-0">
          <article className="inline-block w-1/2 pr-xl pt-xl border-r border-gray-200 max-md:border-0">
            <p className="en-b1 pb-xl uppercase font-regular!">typography</p>
            <div className="w-full aspect-42/27 relative">
              <Image src={data.style.Images[0]} alt="" fill />
            </div>
          </article>
          <article className="inline-block w-1/2 pl-xl pt-xl">
            <p className="en-b1 pb-xl uppercase font-regular!">color</p>
            <div className="w-full aspect-42/27 relative">
              <Image src={data.style.Images[1]} alt="" fill />
            </div>
          </article>
        </div>
      </article>
    </section>
  );
}
