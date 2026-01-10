import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkMockup({ data }: PortfolioDataProps) {
  return (
    <section className="pt-[25vh]">
      <div className="w-full aspect-145/60 px-[15vw] bg-gray-100">
        <div className="relative top-1/4 w-full aspect-100/57 border-4 bg-white border-black rounded-[1.25rem] shadow-gray"></div>
      </div>
      <div className="flex justify-between items-center px-[18vw] pt-96">
        <div className="inline-block relative w-[15vw] mt-[20vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden"></div>
        <div className="inline-block relative w-[15vw] mt-[45vh] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden"></div>
        <div className="inline-block relative w-[15vw] aspect-217/470 border-4 bg-white border-black rounded-[1.25rem] shadow-gray overflow-hidden"></div>
      </div>
    </section>
  );
}
