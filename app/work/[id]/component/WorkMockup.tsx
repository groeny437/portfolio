import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PortfolioDataProps } from "@/app/lib/data";

import dotBackgroundImage from "@/public/bg_contact.svg";

import WaveDotBackground from "@/app/components/common/WaveDotBackground";

gsap.registerPlugin(ScrollTrigger);

export default function WorkMockup({ data }: PortfolioDataProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".workmockup .pc-mockup",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".pc-mockup",
            start: "top center",
          },
        },
      );

      gsap.fromTo(
        ".mo-mockup",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".mo-mockup-box",
            start: "top top",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      className="workmockup mt-[25vh] max-md:pt-0 overflow-x-hidden"
      ref={container}
    >
      <div className="w-full h-dvh max-md:px-side before:content-[''] before:absolute before:w-full before:h-3/5 before:block before:bg-gray-100">
        <div className="pc-mockup relative  top-1/5 w-[70vw] mx-auto box-border aspect-100/57 border-4 border-black rounded-[1.25rem] shadow-gray overflow-hidden">
          <Image src={data.mockup.pc} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="mo-mockup-box flex mt-50 justify-between items-start px-[18vw] max-md:px-side max-md:pt-20 max-md:items-start max-md:flex-wrap">
        <div className="mo-mockup  inline-block relative w-[15vw] mt-[20vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:mt-1/2 max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[0]} alt="" fill />
        </div>
        <div className="mo-mockup inline-block relative w-[15vw] mt-[45vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[1]} alt="" fill />
        </div>
        <div className="mo-mockup inline-block relative w-[15vw] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[2]} alt="" fill />
        </div>
      </div>
      <div className="footer mb-xl">
        <div className="relative thumb w-full aspect-3/1 ">
          <WaveDotBackground style="opacity-20" />
          <p className="absolute bottom-0 en-b1 uppercase font-normal! px-side flex w-full justify-between pb-2xl">
            <span>ui∙ux design</span>
            <span>2026 subin</span>
          </p>
        </div>
      </div>
    </section>
  );
}
