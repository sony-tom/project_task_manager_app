"use client";
import OverViewCardPage from "../components/overviewcard";
import BarChartStatistic from "../components/barChart";
import ActivityFeed from "../components/activityfeed";

export default function Page() {
  return (
    <div className="upper-div">
      <div className="py-8">
        <span className="md:text-xl text-gray-600 font-bold">Projects</span>
        <OverViewCardPage />
      </div>
      <div className="graph-div flex mt-10">
        <div className="w-3/5">
          <div className="w-11/12 h-[400px] rounded">
            <p className="md:text-xl text-gray-600 font-bold">
              Task Completion Statistics
            </p>
            <BarChartStatistic />
          </div>
        </div>
        <div className="w-2/5">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
