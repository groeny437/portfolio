import WorkList from "./component/WorkList";

import { portfolioData } from "../lib/data";

export default function PortfolioPage() {
  return (
    <>
      <WorkList data={portfolioData} />
    </>
  );
}
