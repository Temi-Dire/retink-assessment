import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState<String>("");

  const style = {
    fontSize: "2rem",
    // color: "#4D4959",
  };

  const iconStyleOnHover = {
    color: "#53EEBA", // Change to your desired hover color
  };

  return (
    <>
      <div className="fixed bg-[#F1EDFD] w-24 h-screen p-4 flex-col justify-between hidden lg:flex ">
        <div className="flex flex-col items-center gap-8">
          <img className="w-8" src="/img/retinklogo.png" alt="" />
          <div
            className={`${
              activeIcon === "icon1"
                ? "bg-[#EAE4FC] p-2 rounded-lg"
                : "p-2 rounded-lg"
            }`}
          >
            <HomeIcon
              style={{
                ...style,
                color: activeIcon === "icon1" ? "#5E3EBA" : "#4D4959",
              }}
              className="cursor-pointer"
              onClick={() => setActiveIcon("icon1")}
            />
          </div>
          <div
            className={`${
              activeIcon === "icon2"
                ? "bg-[#EAE4FC] p-2 rounded-lg"
                : "p-2 rounded-lg"
            }`}
          >
            <EventNoteIcon
              style={{
                ...style,
                color: activeIcon === "icon2" ? "#5E3EBA" : "#4D4959",
              }}
              className="cursor-pointer"
              onClick={() => setActiveIcon("icon2")}
            />
          </div>
          {/* <Home className="w-20 h-20" /> */}
          <div className="w-18  h-16 bg-red-200" />
          {/* schedule button */}
        </div>
        <div className="flex flex-col items-center gap-8">
          <div
            className={`${
              activeIcon === "icon3"
                ? "bg-[#EAE4FC] p-2 rounded-lg"
                : "p-2 rounded-lg"
            }`}
          >
            <SettingsIcon
              style={{
                ...style,
                color: activeIcon === "icon3" ? "#5E3EBA" : "#4D4959",
              }}
              className="cursor-pointer"
              onClick={() => setActiveIcon("icon3")}
            />
          </div>
          <div
            className={`${
              activeIcon === "icon4"
                ? "bg-[#EAE4FC] p-2 rounded-lg"
                : "p-2 rounded-lg"
            }`}
          >
            <LogoutIcon
              style={{
                ...style,
                color: activeIcon === "icon4" ? "#5E3EBA" : "#4D4959",
              }}
              className="cursor-pointer"
              onClick={() => setActiveIcon("icon4")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
