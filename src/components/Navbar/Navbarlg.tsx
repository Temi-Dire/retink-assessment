import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion as m } from "framer-motion";

const Navbarlg = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between mb-4 sticky top-0 ">
        <div className="flex w-full justify-between p-4 shadow-md bg-white">
          <div className="flex px-5 w-2/4 rounded-3xl bg-white items-center ">
            <SearchIcon />
            <input
              className=" ml-2 w-full outline-none"
              type="text"
              placeholder="Search for templates, projects, etc"
            />
            <div className="flex gap-2">
              <TuneOutlinedIcon style={{ color: "#DBDBDB" }} />
              <CancelIcon style={{ color: "#DBDBDB" }} />
            </div>
          </div>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1, backgroundColor: "#6939c9" }}
              className="bg-[#754DE8] px-8 py-3 rounded-3xl text-white"
              //   whileHover={{ scale: 1.1, backgroundColor: "#754DE8" }}
            >
              Create Content
            </m.button>
            <m.div
              whileHover={{ scale: 1.1, backgroundColor: "#EDE9FC" }}
              className="flex gap-2 items-center border rounded-3xl bg-[#F1EDFD] px-4 py-1 cursor-pointer"
            >
              <img src="/img/coin.png" alt="" />
              <p>20</p>
            </m.div>
          </div>
        </div>
        <div className="flex w-2/5 justify-between items-center bg-[#F1EDFD] px-4 py-2 border border-[#D4CCEE]">
          <CalendarMonthIcon className="cursor-pointer" />
          <NotificationsNoneOutlinedIcon className="cursor-pointer" />
          <img
            src="/img/profile.png"
            alt="Profile Image"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbarlg;
