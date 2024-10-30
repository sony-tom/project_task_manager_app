import ActivityFeed from "../components/activityfeed";
import OverViewCardPage from "../components/overviewcard";

export default function Page() {
  return (
    <div className="upper-div">
      <div className="py-8">
        <OverViewCardPage />
      </div>
      <div className="graph-div flex">
        <div className="w-3/5">
          <h2>Graph</h2>
        </div>
        <div className="w-2/5">
          <ActivityFeed/>
        </div>
      </div>
    </div>
  );
}
