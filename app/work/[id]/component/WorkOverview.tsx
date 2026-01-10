import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkOverview({ data }: PortfolioDataProps) {
  return (
    <section className="w-2/3 ml-auto px-[8vw]">
      <article className="mb-[30vh] pt-[20vh] pb-14">
        <h2 className="en-t1 font-medium!">{data.overview.title}</h2>
        <p className="kr-b1 mt-ml mb-20 text-gray-400">
          {data.overview.summary}
        </p>
        <div className="w-full aspect-78/44 bg-gray-100 rounded-2xl"></div>
      </article>
    </section>
  );
}
