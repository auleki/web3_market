import { AiFillCloseSquare } from "react-icons/ai";
import { MobileNavbarProps } from "../../global";
import NavbarItem from "./NavbarItem";

const MobileNavbar = ({ closeNavbar, menuItems }: MobileNavbarProps) => {
  return (
    <ul
      className="fixed z-10 top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
      flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
    >
      <li className="text-xl w-full my-2">
        <AiFillCloseSquare onClick={() => closeNavbar(false)} className="text-white" fontSize={20} />
      </li>
      {menuItems.map((link: string, i: number) => <NavbarItem title={link} key={i + "-" + link} classProps="my-2 text-lg" />)}
      <li className=" py-2 px-7 cursor-pointer hover:bg-[#653091] rounded-full hover:text-white">
        Login
      </li>
    </ul>
  )
}

export default MobileNavbar