import * as React from "react";
import logo from "../../assets/Logo + plan tag.png";
import note from "../../assets/note-2.png";
import caution from "../../assets/16 x 16.png";
import arrowdown from "../../assets/chevron arrow-down.png";
import Drawer from "./Sidebar";
import HamburgerMenu from "../Hamburger/Hamburger";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("");
  const links: string[] = ["New notes", "Clients", "Clinicians", "Templates"];

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="align-middle  px-[96px] xl:px-[40px] flex justify-between h-[64px] font-extralight">
        <div className="lg:flex hidden items-center">
          <HamburgerMenu onClick={toggleDrawer} />
        </div>
        <div className="lg:flex hidden items-center">
          <img
            src={logo}
            alt="logo"
            height={64}
            width={120}
            className="mr-[68px] xl:mr-auto "
          />
        </div>
        <div className="lg:flex hidden items-center">
          <p className="rounded-full px-4 py-[10px] bg-[#D6E4F4] text-[18px]">
            M
          </p>
        </div>
        <div className="flex items-center lg:hidden">
          <img
            src={logo}
            alt="logo"
            height={64}
            className="mr-[68px] xl:mr-auto lg2:w-[100px]"
          />
          <div className="flex gap-[32px] lg2:gap-[15px] text-[16px] font-normal  text-[#707070]">
            {links.map((link, index) => (
              <p
                key={index}
                onClick={() => handleLinkClick(link)}
                className={`hover:transition-all hover:font-semibold hover:ease-in  cursor-pointer mt-[24px] pb-[16px] ${
                  activeLink === link
                    ? "text-[#731054] border-b-4 border-[#731054] font-semibold duration-0"
                    : ""
                }`}
              >
                {link}
              </p>
            ))}
            <p className="px-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#731054] to-[#DE0D6F] cursor-pointer mt-[24px] pb-[16px]">
              Earn $80
            </p>
          </div>
        </div>
        <div className="flex items-center px-4 gap-[16px] text-[16px] lg:hidden">
          <div className="flex gap-2 text-[#707070]  items-center">
            <img src={note} alt="noteIcon" />
            <p>12 notes left</p>
            <img src={caution} alt="cautionIcon" />
          </div>
          <div className="">
            <button className="px-[16px] py-[8px] text-[#fff] bg-gradient-to-r from-[#731054] to-[#DE0D6F] rounded-[4px]">
              Become SUPER
            </button>
          </div>
          <div className="flex items-center gap-1">
            <p className="rounded-full px-4 py-[10px] bg-[#D6E4F4] ">
              M
            </p>
            <img src={arrowdown} alt="arrowdown" />
          </div>
        </div>
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        links={links}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
      />
    </>
  );
}

export default Navbar;
