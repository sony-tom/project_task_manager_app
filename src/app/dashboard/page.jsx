"use client";
import OverViewCardPage from "../components/overviewcard";
import BarChartStatistic from "../components/barChart";

export default function Page() {
  return (
    <div className="upper-div">
      <div className="py-8">
        <OverViewCardPage />
      </div>
      <div className="graph-div flex">
        <div className="w-3/5">
          <h2>Graph</h2>
          <div className="w-11/12 h-[400px] rounded">
            <BarChartStatistic />
          </div>
        </div>
        <div className="w-2/5">
          <h2>Recents table</h2>
        </div>
      </div>
    </div>
  );
}
