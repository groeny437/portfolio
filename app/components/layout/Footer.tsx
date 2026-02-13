"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "../common/SectionTitle";
import GradientButton from "../common/GradientButton";
import WaveDotBackground from "../common/WaveDotBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.fromTo(
        ".section-title",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top top+=100",
          },
        },
      );

      mm.add("(max-width: 1023px)", () => {
        gsap.from(".mo-text p", {
          autoAlpha: 0,
          rotationX: -100,
          transformOrigin: "50% 50% -200px",
          ease: "power3",
          stagger: 0.25,
          scrollTrigger: {
            trigger: container.current,
            start: "top top+=100",
          },
        });
      });

      mm.add("(min-width: 1024px)", () => {
        gsap.from(".pc-text p", {
          autoAlpha: 0,
          rotationX: -100,
          transformOrigin: "50% 50% -200px",
          ease: "power3",
          stagger: 0.25,
          scrollTrigger: {
            trigger: container.current,
            start: "top top+=100",
          },
        });
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <footer
      ref={container}
      className="flex flex-col items-center justify-center w-full h-dvh  relative"
    >
      <SectionTitle title="contact" />
      <div className="en-h4 footer-text justify-center text-center z-10 px-side mt-ml uppercase">
        <div className="pc-text hidden flex-col flex-wrap gap-y-5 lg:flex">
          <p className="bg-white">if you wish</p>
          <p className="bg-white">to reach me,</p>
          <p className="inline-flex items-center gap-4 bg-white">
            please click{" "}
            <GradientButton
              defaultText="here"
              hoverText="여기"
              buttonStyle="px-xl"
              defaultTextStyle="en-h4"
              hoverTextStyle="kr-t1 "
            />
          </p>
          <p className="bg-white">to connect.</p>
        </div>
        <div className="mo-text flex flex-col flex-wrap gap-y-sm lg:hidden">
          <p className="bg-white">if you </p>
          <p className="bg-white">wish to</p>
          <p className="bg-white">reach me,</p>
          <p className="bg-white">please</p>
          <p className="inline-flex items-center gap-4 bg-white">
            click{" "}
            <GradientButton
              defaultText="here"
              hoverText="여기"
              buttonStyle="whitespace-nowrap"
              defaultTextStyle="en-h4"
              hoverTextStyle="kr-t1 text-[2.25rem]!"
            />
          </p>
          <p>to connect.</p>
        </div>
      </div>
      <p className="flex justify-between w-full px-side absolute bottom-xl en-b1 uppercase text-gray-500">
        <span className="font-normal">ui∙ux design</span>
        <span className="font-normal">2026 subin</span>
      </p>
      <div className=" w-full absolute bottom-[10vh] lg:bottom-0 left-0 aspect-3/1  ">
        <WaveDotBackground style="max-md:h-auto max-md:aspect-[1.5/1]" />
      </div>
    </footer>
  );
}
