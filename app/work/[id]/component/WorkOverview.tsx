import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkOverview({ data }: PortfolioDataProps) {
  return (
    <section className="w-2/3 ml-auto px-[8vw] max-md:w-full max-md:px-side">
      <article className="mb-[30vh] pt-[20vh] pb-14 max-md:pb-0">
        <span className="point-t2 text-gray-500 uppercase md:hidden">
          <i className="square-box"></i> overview
        </span>
        <h2 className="en-t1 mt-4 font-medium!">{data.overview.title}</h2>
        <p className="kr-b1 mt-ml mb-20 text-gray-400 max-md:mb-25">
          {data.overview.summary}
        </p>
        <div className="w-full aspect-78/44 bg-gray-100 rounded-2xl"></div>
      </article>
    </section>
  );
}
