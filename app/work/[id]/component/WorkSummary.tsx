import { PortfolioDataProps } from "@/app/lib/data";

export default function WorkSummary({ data }: PortfolioDataProps) {
  return (
    <section className="w-2/3 ml-auto px-[8vw]">
      <article className="pb-20">
        <p className="kr-b1 mb-2xl text-gray-400">{data.insight.summary}</p>
        <ul>
          <li className="flex justify-center items-center py-9 px-md kr-b1 border-b border-t border-gray-200">
            <span>①</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[0]}
            </span>
          </li>
          <li className="flex py-9 px-md border-b border-gray-200">
            <span>②</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[1]}
            </span>
          </li>
          <li className="flex py-9 px-md border-b border-gray-200">
            <span>③</span>
            <span className="inline-block w-full text-center font-medium!">
              {data.insight.keywords[2]}
            </span>
          </li>
        </ul>
      </article>
      <article className="pt-20 pb-36">
        <p className="kr-b1 mb-2xl text-gray-400">{data.design.summary}</p>
        <div className="w-full aspect-92/28 bg-gray-100"></div>
      </article>
      <article className="pt-36 pb-64">
        <p className="kr-b1 mb-2xl text-gray-400">{data.style.summary}</p>
        <div className="w-full border-t border-gray-200">
          <article className="inline-block w-1/2 pr-xl pt-xl border-r border-gray-200">
            <p className="en-b1 pb-xl uppercase font-regular!">typography</p>
            <div className="w-full aspect-42/27 bg-gray-100"></div>
          </article>
          <article className="inline-block w-1/2 pl-xl pt-xl">
            <p className="en-b1 pb-xl uppercase font-regular!">color</p>
            <div className="w-full aspect-42/27 bg-gray-100"></div>
          </article>
        </div>
      </article>
    </section>
  );
}
