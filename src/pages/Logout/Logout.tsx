import Navbarlg from "../../components/Navbar/Navbarlg";
import Sidebar from "../../components/Siderbar/Sidebar";

const Logout = () => {
  return (
    <>
      <Sidebar />
      <div className="flex-1 lg:ml-[7.5rem]">
        <Navbarlg />
        <div className="text-6xl font-ra">THIS IS THE SETTINGS PAGE</div>
      </div>
    </>
  );
};

export default Logout;
