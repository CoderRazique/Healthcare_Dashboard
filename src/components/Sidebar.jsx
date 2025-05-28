import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  MessageCircle,
  HelpCircle,
  Settings,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { navigationItems, toolsItoms } from "../data/navigationData";

const iconGenMap = { LayoutDashboard, History, Calendar, Clock, BarChart3 };
const iconToolsMap = { MessageCircle, HelpCircle };

const Sidebar = () => {
  const [open, setOpen] = useState(false); // mobile drawer state

  return (
    <>
      {/* mobile toggle button */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 md:hidden"
        />
      )}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="sm:hidden flex fixed top-18 pt-1 left-3 z-50 animate-pulse "
        >
          <Menu className=" w-5 h-5" />
        </button>
      )}

      {/* sidebar */}
      <aside
        className={`
          w-50 bg-blue-50 p-6 flex flex-col  sm:justify-between
          fixed z-40 transition-transform duration-300 ease-in-out
    ${open ? "top-18" : "-top-full"} left-0 
    sm:top-0 sm:left-0 sm:min-h-screen sm:translate-x-0 sm:static
        `}
      >
        {/* TOP CONTENT*/}
        <div className="mb-8">
          <h2 className="text-sm pt-2 font-medium text-gray-300 uppercase tracking-wide mb-4">
            General
          </h2>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = iconGenMap[item.icon];
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-400 hover:text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide mt-4 mb-4">
            Tools
          </h2>

          <div className="space-y-2">
            {toolsItoms.map((item) => {
              const Icon = iconToolsMap[item.icon];
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-400 hover:text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:text-gray-500 hover:bg-gray-50"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
