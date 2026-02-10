"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PortfolioDataProps } from "@/app/lib/data";
import GradientButton from "@/app/components/common/GradientButton";

import dotImage from "@/public/img_o_default_white.svg";

gsap.registerPlugin(ScrollTrigger);

export default function WorkIntro({ data }: PortfolioDataProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const workIntroTitle = ".title > span";
      const workIntroFooter = ".footer";

      tl.fromTo(
        workIntroTitle,
        {
          y: -100,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: { from: "end", each: 0.05 },
        },
      ).fromTo(
        workIntroFooter,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
      );
    },
    { scope: container },
  );
  return (
    <section className="workintro relative w-full h-dvh" ref={container}>
      <div
        className="absolute top-0 left-0 w-full h-full after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_100%)]
  after:bg-no-repeat
  after:bg-position-[0px_-133.68px]
  after:bg-size-[100%_131.829%] "
      >
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
      </div>

      <h1 className="title en-h3 capitalize relative text-white px-side pt-[15vh] z-50">
        {data.title.split("").map((ch, idx) =>
          ch === "o" && idx === data.title.indexOf("o") ? (
            <span key={idx} className="inline-block relative">
              <span className="opacity-0 lowercase">o</span>
              <Image
                src={dotImage}
                alt=""
                className=" absolute left-1/2 bottom-0 w-10/12 -translate-x-1/2 -translate-y-3.5"
              />
            </span>
          ) : (
            <span
              className={`inline-block  ${idx === 0 ? "uppercase" : "lowercase"}`}
              key={idx}
            >
              {ch}
            </span>
          ),
        )}
      </h1>
      <div className="footer absolute bottom-20 flex flex-row justify-between px-side items-center w-full max-md:flex-col max-md:items-end">
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
            buttonStyle="px-ml! h-[52px]!"
            defaultTextStyle="en-t2 font-normal!"
            hoverTextStyle="kr-s1"
          />
        )}
      </div>
    </section>
  );
}
