"use client";
import { useState } from "react";
import OverViewCardPage from "../components/overviewcard";
import BarChartStatistic from "../components/barChart";
import ActivityFeed from "../components/activityfeed";
import Modal from "../components/modal";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="upper-div">
      <div className="flex justify-end">
        <div className="bg-blue-500 p-2 w-40 text-center text-white rounded">
          <button onClick={handleModalOpen}>Create Quick Task</button>
        </div>
      </div>
      <div className="py-8">
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div></div>
      </Modal>
    </div>
  );
}
