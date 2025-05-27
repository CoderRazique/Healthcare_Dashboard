import { HeartIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { Scan } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="w-[327px] lg:w-[400px] md:w-[480px] pt-6 relative ">
      <div className="relative  h-96  flex justify-center">
        <MagnifyingGlassPlusIcon className="relative left-60 mt-2 h-6 w-6 text-gray-700 cursor-pointer" />

        <img
          src="/musculer.png"
          alt="Human Anatomy"
          className="h-100  bg-blue-50 rounded-xl object-cover sm:object-contain"
        />

        <div className="cursor-pointer absolute top-20 right-0 md:right-12 lg:right-2 xl:right-2 flex space-x-0 pl-20 sm:space-x-2 items-center">
          <Scan className="w-8 h-8 md:h-10 md:w-10 sm:w-10 sm:h-10 text-blue-400" />
          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1">
            <HeartIcon className="w-3 h-3 md:h-6 md:w-6 sm:w-6 sm:h-6 text-red-500" />
            <span>Healthy Heart</span>
          </div>
        </div>

        <div className="absolute bottom-23 left-5 md:left-21 lg:left-12 xl:left-12 flex sm:space-x-2 space-x-1 items-center cursor-pointer">
          <div className="bg-cyan-400 text-white px-2 py-2 rounded-lg text-sm font-medium flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faPersonRunning}
              className="text-yellow-700 text-lg sm:text-xl"
            />
            <span>Healthy Leg</span>
          </div>
          <Scan className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
