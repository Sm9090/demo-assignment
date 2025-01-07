import React from "react";
import HamburgerMenu from "../Hamburger/Hamburger";
import note from "../../assets/note-2.png";
import caution from "../../assets/16 x 16.png";
import { DrawerProps } from "../../utils/type";



const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, links  ,activeLink ,handleLinkClick}) => {
  return (
    <div
      className={`z-20 p-4 fixed top-0 left-0 w-[350px] ssms:w-[280px] h-full bg-[#f7f7f7] border-r border-gray-200 shadow-lg transition-transform transform duration-500 ease-in lg:block hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex flex-col px-2 justify-between h-full">
        <div className="flex justify-between">
          <button className="text-[16px] px-[16px] py-[8px] text-[#fff] bg-gradient-to-r from-[#731054] to-[#DE0D6F] rounded-[4px]">
            Become SUPER
          </button>{" "}
          <HamburgerMenu onClick={onClose} title="close" />
        </div>
        <div className="flex flex-col gap-[12px] text-[#707070]">
          {links.map((link, index) => (
            <p
            onClick={() => handleLinkClick(link)}
              key={index}
              className={`py-4 px-2 w-full  rounded hover:transition-all hover:font-semibold hover:ease-in hover:duration-300 ${
                activeLink === link
                ? " bg-[#731054] text-[#fff] font-semibold duration-0"
                : ""}`}
            >
              {link}
            </p>
          ))}
            <a
              href="/"
              className="py-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#731054] to-[#DE0D6F]"
            >
              Earn $80
            </a>
            <div className="py-4 flex gap-2 text-[#707070] text-[16px] items-center">
            <img src={note} alt="noteIcon" />
            <p>12 notes left</p>
            <img src={caution} alt="cautionIcon" />
          </div>
        </div>
        <div className="py-4  w-full  text-[#731054]  rounded-md text-center text-[20px] cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Drawer;
