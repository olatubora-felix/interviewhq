import { NavLink } from "react-router-dom";

import { AppNav } from "../constants/sideNav";

const active = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? "#E3B100" : "#FFF",
    fill: isActive ? "#E3B100" : "#334155",
    // borderLeft: isActive ? "2px solid #0000FF" : "#334155",
    transition: "all .3s",
  };
};

const NAV = {
  BASE: AppNav,
};

const SideNav = () => {
  return (
    <div className="bg-[#170134] flex  border-r-2 border-[#F7F7F8] text-[#fff] font-[Inter] ">
      <div className="container mx-auto flex justify-between items-center">
        <h1>Interviewhq</h1>
        <div className="flex  gap-2 pl-4">
          {NAV.BASE.map((sidenav) => (
            <NavLink
              className="text-[#334155] text-[14px]  font-[400] active:text-blue-800 h-[40px] active:font-[400]  flex items-center gap-3"
              to={sidenav.path}
              key={sidenav.name}
              style={active}
            >
              <span>{sidenav.name}</span>
            </NavLink>
          ))}
        </div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default SideNav;
