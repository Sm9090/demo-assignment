import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io"
import { HamburgerMenuProps } from "../../utils/type";



const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick ,title }) => {
  return (
    <button onClick={onClick} className="text-[#222D39]">
    {title === 'close' ? <IoMdClose size={30} /> : <HiMenu size={30} />}
    </button>
  );
};

export default HamburgerMenu;