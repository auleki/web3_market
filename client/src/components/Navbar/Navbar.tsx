import { useState } from "react"
import logo from "../../../images/logo.png"
import NavbarItem from "./NavbarItem"
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(true)
  const menuLinks = ["Market", "Exchange", "Tutorials", "Wallet"]
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {menuLinks.map((link: string, i: number) => <NavbarItem title={link} key={i + "-" + link} />)}
        <li className="bg-white text-black py-2 px-7 cursor-pointer hover:bg-[#653091] rounded-full hover:text-white">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {mobileNavOpen
          ? <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setMobileNavOpen(false)}
          />
          : <RiMenu4Fill
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setMobileNavOpen(true)}
          />
        }
        {mobileNavOpen && (
          <MobileNavbar menuItems={menuLinks} closeNavbar={setMobileNavOpen} />
        )}
      </div>
    </nav>
  )
}

export default Navbar