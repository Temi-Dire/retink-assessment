import Navbarlg from "../../components/Navbar/Navbarlg";
import Sidebar from "../../components/Siderbar/Sidebar";
import { motion as m } from "framer-motion";

const Settings = () => {
  const pageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <Sidebar />
      <div className="flex-1 lg:ml-[7.5rem]">
        <Navbarlg />
        <m.div
          variants={pageAnimation}
          initial="hidden"
          animate="visible"
          className="text-6xl font-ra"
        >
          THIS IS THE SETTINGS PAGE
        </m.div>
      </div>
    </>
  );
};

export default Settings;
