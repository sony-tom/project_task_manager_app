const RecentActivities = () => {
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl text-gray-600 md:text-xl font-bold`}>Recent Activities</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold md:text-black">
                Jacob George
              </p>
              <p className="hidden text-sm text-gray-500 sm:block">
                mailjacob@gmail.com
              </p>
            </div>
          </div>
          <p className="text-gray-400">Rs. 23234</p>
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now!</h3>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
