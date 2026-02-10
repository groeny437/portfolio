import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "@/app/components/common/SectionTitle";

import { PortfolioDataProps } from "@/app/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function WorkOverview({ data }: PortfolioDataProps) {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".thumb",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
          },
        },
      );
    },
    { scope: container },
  );
  return (
    <section
      className="workoverview flex items-start w-full ml-auto px-[8vw] pt-[20vh] max-md:w-full max-md:px-side"
      ref={container}
    >
      <SectionTitle title="overview" style="mb-0" />
      <article className="w-2/3 ml-auto mb-[30vh]  pb-14 max-md:pb-0">
        <h2 className="en-t1 mt-4 font-medium!">{data.overview.title}</h2>
        <p className="kr-b1 mt-ml mb-20 text-gray-400 max-md:mb-25">
          {data.overview.summary}
        </p>
        <div className="thumb w-full aspect-78/44 rounded-2xl relative border-4 border-black shadow-gray overflow-hidden">
          <Image
            src={data.overview.Image}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </article>
    </section>
  );
}
