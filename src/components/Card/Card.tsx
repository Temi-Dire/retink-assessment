import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

interface Props {
  header: string;
  desc: string;
  classCard: string;
  id: number;
}

const Card = ({ header, desc, classCard, id }: Props) => {
  return (
    <>
      <div
        className={`bg-white w-40 lg:w-72 rounded-lg mt-3 p-2 max-w-[250px] ${classCard} lg:px-6 lg:py-4`}
      >
        <div className="flex justify-between">
          {id === 1 && <CreateOutlinedIcon style={{ color: "orange" }} />}
          {id === 2 && <NoteAltOutlinedIcon style={{ color: "green" }} />}
          {id === 3 && <EditNoteOutlinedIcon style={{ color: "purple" }} />}
          <TrendingUpIcon />
        </div>
        <h1 className="font-semibold text-sm lg:text-xl mb-3 mt-5 lg:mt-4 font-rale text-[#1D1437]">
          {header}
        </h1>
        <p className="font-semibold text-xs lg:text-base lg:mb-12 font-rale text-[#77737F]">
          {desc}
        </p>
      </div>
    </>
  );
};

export default Card;
