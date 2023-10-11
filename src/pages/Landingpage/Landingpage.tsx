import Card from "../../components/Card/Card";
import SearchIcon from "@mui/icons-material/Search";
import "./Landingpage.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Siderbar/Sidebar";
import Dropdownmenu from "../../components/Dropdownmenu/Dropdownmenu";
import Navbarlg from "../../components/Navbar/Navbarlg";
import { motion as m } from "framer-motion";

const Landingpage = () => {
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
      <m.div
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        <Sidebar />
        <div className="relative flex-1 lg:ml-[7.5rem]">
          <Navbarlg />
          <div className="bg-purple-100 rounded-b-3xl pt-4 pb-20 px-7 lg:rounded-3xl lg:pb-10 lg:mr-2">
            <Navbar />
            <div className="mt-8">
              <div className="flex justify-between text-[#4D4959]">
                <div className="font-rale">
                  <h1 className="font-medium text-4xl lg:text-5xl">
                    Hey James!
                  </h1>
                  <h2 className="font-medium text-base lg:text-xl ">
                    Lets create something awesome today ✨💫
                  </h2>
                </div>
                <div className="hidden lg:flex flex-col items-end text-base">
                  <Dropdownmenu />
                  <div className="flex-start font-rale">
                    <p className="my-4">
                      You should have more engagement by 6pm today, try posting
                      then 📆.
                    </p>
                    <p>
                      Try our SEO optimization tool to increase engagement by
                      40% 🔥.
                    </p>
                  </div>
                </div>
              </div>
              <m.button
                initial={{
                  scale: 1,
                  backgroundColor: "white",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#754DE8",
                  color: "white",
                }}
                className="hidden lg:block mt-4 border-2 border-[#754DE8] text-[#754DE8] font-rale py-3 px-12 rounded-2xl bg-white"
              >
                Start Creating
              </m.button>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-3xl bg-white absolute top-56 left-9 w-4/5 justify-center items-center text-sm lg:hidden">
            <SearchIcon className="" />
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search for templates, projects, etc"
            />
          </div>
          <div className="mt-10">
            <div className="px-4 text-[#4D4959]">
              <h2 className="font-semibold text-lg lg:text-2xl font-rale">
                Most Popular Tools
              </h2>
              <h2 className="font-medium text-sm font-rale lg:text-xl ">
                Explore the trending tools to create your copies fast
              </h2>
            </div>
            <div className="mt-4 bg-[#F4F3F6] rounded-t-3xl p-4 lg:mr-2">
              <div className="">
                <h2 className="font-medium text-sm lg:text-xl text-[#4D4959]">
                  Blog Writing
                </h2>
                <div className="flex gap-[18px] overflow-x-hidden">
                  <Card
                    header="Blog writing"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={1}
                  />
                  <Card
                    header="Product description"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={2}
                  />
                  <Card
                    header="Article writer"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="hidden lg:block"
                    id={3}
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-sm lg:text-xl text-[#4D4959]">
                  Social Media
                </h2>
                <div className="flex gap-[18px] ">
                  <Card
                    header="Blog writing"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={1}
                  />
                  <Card
                    header="Product description"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={2}
                  />
                  <Card
                    header="Article writer"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={3}
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-sm lg:text-xl text-[#4D4959]">
                  Article Writing
                </h2>
                <div className="flex gap-[18px] ">
                  <Card
                    header="Blog writing"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={1}
                  />
                  <Card
                    header="Product description"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={2}
                  />
                  <Card
                    header="Article writer"
                    desc="Generate the best blog post to fit your audience with just few clicks of a button"
                    classCard="block"
                    id={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Landingpage;
