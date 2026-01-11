import SectionTitle from "@/app/components/common/SectionTitle";
import GradientButton from "@/app/components/common/GradientButton";

export default function MainIntro() {
  return (
    <section className="w-full h-dvh flex flex-col justify-center items-center text-center">
      <SectionTitle title="philosophy" />
      <div className="en-h4 mt-ml">
        <div className="mb-ml">
          Finding the{" "}
          <GradientButton
            defaultText="hidden pattern"
            hoverText="숨겨진 패턴"
            buttonStyle="px-xl!"
            defaultTextStyle="en-h4"
            hoverTextStyle="kr-t1"
          />
        </div>
        <div>in every scattered idea.</div>
      </div>
    </section>
  );
}
