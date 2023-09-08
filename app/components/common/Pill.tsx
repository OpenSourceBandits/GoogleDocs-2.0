import { PiUserCircleFill } from "react-icons/pi";
import { HiChevronDown } from "react-icons/hi";

interface PillProps {
  icon: boolean;
  chevron: boolean;
  text: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({
  text,
  icon = false,
  chevron = false,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-2 p-1 rounded-full  text-secondary border border-light-gray cursor-pointer"
      onClick={onClick}
    >
      {icon && <PiUserCircleFill className="text-xl" />}
      <p className="text-sm font-semibold">{text}</p>
      {chevron && <HiChevronDown className="text-xl" />}
    </div>
  );
};

export default Pill;
