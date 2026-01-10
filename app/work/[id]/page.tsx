"use client";

import { portfolioData } from "@/app/lib/data";

import WorkIntro from "./component/WorkIntro";
import WorkOverview from "./component/WorkOverview";
import WorkSummary from "./component/WorkSummary";
import WorkMockup from "./component/WorkMockup";

import { useParams } from "next/navigation";

export default function WorkDetailPage() {
  const params = useParams();
  const { id } = params;

  const workItem = portfolioData.find((item) => item.id.toString() === id);

  if (!workItem) {
    return null;
  }

  return (
    <>
      <WorkIntro data={workItem} />
      <WorkOverview data={workItem} />
      <WorkSummary data={workItem} />
      <WorkMockup data={workItem} />
    </>
  );
}
