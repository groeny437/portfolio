"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { WorkListProps } from "@/app/lib/data";

import oTextIcon from "@/public/img_o_default.svg";

gsap.registerPlugin(ScrollTrigger);

export default function WorkList({ data }: WorkListProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const workItems = gsap.utils.toArray<HTMLElement>("li");
      const workListTitle = ".title span";
      const workListSubTitle = ".subtitle";

      gsap.set(workItems, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set([workListTitle, workListSubTitle], { autoAlpha: 0 });

      tl.fromTo(
        workListTitle,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: { from: "end", each: 0.05 },
        }
      )
        .to(workListSubTitle, {
          autoAlpha: 1,
        })
        .call(
          () => {
            workItems.forEach((item) => {
              gsap.to(item, {
                scaleX: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 70%",
                },
              });
            });
          },
          [],
          "+=0.5"
        );

      workItems.forEach((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap.fromTo(
          item,
          { y: 0 },
          {
            y: 100 * direction,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section className="worklist" ref={container}>
      <div className="flex flex-wrap items-end gap-x-2xl gap-y-xl px-side pt-2xl pb-xl max-md:gap-x-0">
        <h1 className="title inline-flex flex-wrap items-center en-h3 max-md:w-full">
          <span>M</span>
          <span>y</span>
          <span className="inline-block  mx-ml">-</span>
          <span className="max-md:block max-md:w-full max-md:text-end">W</span>
          <span>
            <Image
              src={oTextIcon}
              width={66}
              height={66}
              alt=""
              className="inline-block max-md:w-10 max-md:h-10"
            />
          </span>
          <span>r</span>
          <span>k</span>
        </h1>
        <div className="subtitle inline-block kr-b1 text-gray-300 pb-xs max-md:w-full">
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
                className="w-[calc(50%-var(--space-xl)/2)] max-md:flex-none max-md:w-full overflow-hidden"
                key={i}
              >
                <article className="w-full h-full border border-black">
                  <Link href={`/work/${item.id}`} className="w-full h-full">
                    <div className="relative w-full aspect-62/32">
                      <Image src={item.thumb.pc} alt={item.summary} fill />
                    </div>
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
