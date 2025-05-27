import { Search, Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className=" bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex w-full">
        <div className="flex-[2] justify-center items-center space-x-8">
          <h1 className="text-2xl cursor-pointer font-bold text-cyan-500">
            Health<span className="text-black">care.</span>
          </h1>
        </div>
        <div className="flex-[4] justify-center flex items-center">
          <div className="relative w-30 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />

            <Bell className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 w-5 h-5 cursor-pointer" />

            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex-[2] flex items-center justify-end space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/profile.jpg"
              alt="User Avatar"
              className="w-8 h-8  rounded-full"
            />
          </div>

          <button className="bg-cyan-500 text-white p-1.5 sm:p-2 rounded-lg hover:bg-cyan-600 cursor-pointer">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
