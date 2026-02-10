import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";

import SectionTitle from "@/app/components/common/SectionTitle";

import { PortfolioDataProps } from "@/app/lib/data";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function WorkSummary({ data }: PortfolioDataProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set(".header div > p", { autoAlpha: 0 });
      gsap.set(".header div > p:first-child", { autoAlpha: 1 });

      gsap.fromTo(
        ".workinsight li span",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 20%",
          },
        },
      );

      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const headerTexts = gsap.utils.toArray<HTMLElement>(".header div > p");

      panels.forEach((panel, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "bottom top",
            onEnter: () => {
              gsap.to(headerTexts, { autoAlpha: 0, duration: 0.2 });
              gsap.to(headerTexts[i], { autoAlpha: 1, duration: 0.2 });
            },

            onEnterBack: () => {
              gsap.to(headerTexts, { autoAlpha: 0, duration: 0.2 });
              gsap.to(headerTexts[i], { autoAlpha: 1, duration: 0.2 });
            },
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section className="worksummary flex items-start px-[8vw]" ref={container}>
      <div className="flex mb-ml header w-[30%] sticky top-[20vh] max-md:hidden ">
        <i className="inline-block w-2 h-2 mr-xs bg-black align-middle"></i>
        <div className="relative  w-full">
          <p className="point-t2 absolute top-0 left-0 uppercase text-gray-500">
            insight
          </p>
          <p className="point-t2 absolute top-0 left-0 uppercase text-gray-500">
            design keyword
          </p>
          <p className="point-t2 absolute top-0 left-0 uppercase text-gray-500">
            style guide
          </p>
        </div>
      </div>

      <div className="workinsight  w-2/3 ml-auto max-md:w-full max-md:px-side">
        <article className="panel pb-20 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
          <SectionTitle title="insight" style="md:hidden" />
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
        <article className="workdesign panel pt-20 pb-36 max-md:pt-0 max-md:pb-0 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
          <SectionTitle title="design keyword" style="md:hidden" />
          <p className="kr-b1 mb-2xl text-gray-400 max-md:mt-4">
            {data.design.summary}
          </p>
          <div className="w-full aspect-92/28 max-md:aspect-33/28">
            <div className="flex">
              <Image
                src={data.design.Images[0]}
                alt=""
                className="w-[calc((100%-80px)/3)]"
              />
              <span className="w-10 h-px bg-black inline-block relative top-7.5"></span>
              <Image
                src={data.design.Images[1]}
                alt=""
                className="w-[calc((100%-80px)/3)] "
              />
              <span className="w-10 h-px bg-black inline-block relative top-7.5"></span>
              <Image
                src={data.design.Images[2]}
                alt=""
                className="w-[calc((100%-80px)/3)]"
              />
            </div>
          </div>
        </article>
        <article className="workstyle panel pt-36 pb-64 max-md:pt-0 max-md:pb-0 max-md:h-dvh max-md:flex max-md:flex-col max-md:justify-center">
          <SectionTitle title="style guide" style="md:hidden" />
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
      </div>
    </section>
  );
}
