import Image from "next/image";

import MainWorkBackground from "@/public/img_work.jpg";

export default function MainWork() {
  return (
    <section className="relative flex flex-col justify-between items-center w-full h-dvh pt-[20vh] pb-[10vh]">
      <Image
        src={MainWorkBackground}
        fill
        alt=""
        className="absolute top-0 left-0 -z-10"
      />
      <p className="uppercase">
        <span className="point-t1">design</span>
        <span className="en-t2">- folio</span>
      </p>
      <div>
        <div className="en-h2 px-16 py-8 bg-white border border-black rounded-[12.5rem] uppercase">
          work
        </div>
        <p className="en-b1 mt-ml font-regular! text-gray-500 text-center">
          Built with intention and shaped with detail.
        </p>
      </div>
    </section>
  );
}
