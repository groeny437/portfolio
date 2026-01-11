import Link from "next/link";

type dataProps = {
  href?: string;
  defaultText: string;
  hoverText: string;
  buttonStyle?: string;
  defaultTextStyle: string;
  hoverTextStyle: string;
};

export default function GradientButton({
  href,
  defaultText,
  hoverText,
  buttonStyle,
  defaultTextStyle,
  hoverTextStyle,
}: dataProps) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          target="_blank"
          className={`${buttonStyle} relative px-ml py-sm w-auto box-border inline-flex items-center justify-center bg-white border border-black rounded-[6.25rem] capitalize cursor-pointer group max-md:aspect-auto`}
        >
          <span
            className={`${defaultTextStyle} gradient-text uppercase transition-opacity duration-300 inline-block group-hover:hidden max-md:hidden`}
          >
            {defaultText}
          </span>
          <span
            className={`${hoverTextStyle} gradient-text transition-opacity duration-300 hidden group-hover:inline-block max-md:inline-block`}
          >
            {hoverText}
          </span>
          <i className="star-icon ml-xs"></i>
        </Link>
      ) : (
        <div
          className={`${buttonStyle} relative px-ml py-sm w-auto box-border inline-flex items-center justify-center bg-white border border-black rounded-[6.25rem] capitalize cursor-pointer group max-md:aspect-auto`}
        >
          <span
            className={`${defaultTextStyle} gradient-text uppercase transition-opacity duration-300 inline-block group-hover:hidden max-md:hidden`}
          >
            {defaultText}
          </span>
          <span
            className={`${hoverTextStyle} gradient-text transition-opacity duration-300 hidden group-hover:inline-block max-md:inline-block`}
          >
            {hoverText}
          </span>
          <i className="star-icon ml-xs w-10! h-10!"></i>
        </div>
      )}
    </>
  );
}
