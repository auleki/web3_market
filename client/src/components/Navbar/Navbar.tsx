
import { useState } from "react"
import logo from "../../../images/logo.png"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
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
      <div className="flex relative"></div>
    </nav>
  )
}

export default Navbar