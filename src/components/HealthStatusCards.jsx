import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { healthStatusData } from "../data/healthData";

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-col items-center">
        {healthStatusData.map((item) => {
          return (
            <div className="p-4 m-2 w-full sm:w-40 bg-blue-50 rounded-xl ">
              <div className="flex flex-col  justify-start mb-1">
                <div className="flex items-center">
                  <img src={item.src} alt={item.alt} className="h-15 w-15" />
                  <h3 className="font-medium  text-gray-900">{item.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.status === "good" ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-4">
        <h3 className="flex items-center justify-end cursor-pointer">
          <span>Details</span>
          <ArrowLongRightIcon className="w-6 h-6 text-black" />
        </h3>
      </div>
    </div>
  );
};

export default HealthStatusCards;
