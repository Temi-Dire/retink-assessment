import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Dropdownmenu = () => {
  return (
    <>
      <div className="w-40 h-9 flex justify-center gap-4 items-center bg-white rounded-lg font-rale cursor-pointer">
        Zara Ventures
        <ArrowDropDownIcon className="flex-end" />
      </div>
    </>
  );
};

export default Dropdownmenu;
