import Image from "next/image";

import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkMockup({ data }: PortfolioDataProps) {
  return (
    <section className="pt-[25vh] max-md:pt-0">
      <div className="w-full aspect-145/60 px-[15vw] bg-gray-100 max-md:px-side">
        <div className="relative top-1/4 w-full aspect-100/57 border-4 border-black rounded-[1.25rem] shadow-gray overflow-hidden">
          <Image src={data.mockup.pc} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[18vw] pt-96 max-md:px-side max-md:pt-20 max-md:items-start max-md:flex-wrap">
        <div className="inline-block relative w-[15vw] mt-[20vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:mt-1/2 max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[0]} alt="" fill />
        </div>
        <div className="inline-block relative w-[15vw] mt-[45vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[1]} alt="" fill />
        </div>
        <div className="inline-block relative w-[15vw] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden max-md:rounded-[0.625rem] max-md:w-1/2">
          <Image src={data.mockup.mobile[2]} alt="" fill />
        </div>
      </div>
    </section>
  );
}
