import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import * as IoIosIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

type IconProps = {
  name: string;
  fontSize?: string;
  color?: string;
};

const Icon = ({ name, fontSize, color }: IconProps) => {
  let IconComponent: any;
  if (name.startsWith("Hi")) {
    IconComponent = HiIcons[name];
  }
  if (name.startsWith("Bi")) {
    IconComponent = BiIcons[name];
  }
  if (name.startsWith("Bs")) {
    IconComponent = BsIcons[name];
  }
  if (name.startsWith("Io")) {
    IconComponent = IoIcons[name];
  }
  if (name.startsWith("IoIos")) {
    IconComponent = IoIosIcons[name];
  }
  if (name.startsWith("Ri")) {
    IconComponent = RiIcons[name];
  }
  if (name.startsWith("Vsc")) {
    IconComponent = VscIcons[name];
  }
  if (name.startsWith("Md")) {
    IconComponent = MdIcons[name];
  }
  if (name.startsWith("Fa")) {
    IconComponent = FaIcons[name];
  }
  if (!IconComponent) {
    return <BsQuestionCircle />;
  }
  return <IconComponent fontSize={fontSize} color={color} />;
};

export default Icon;
