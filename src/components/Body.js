import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row pt-16">
      {/* Sidebar takes full width on mobile, fixed width on larger screens */}
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      {/* Main content adjusts automatically */}
      <div className="flex-1 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
