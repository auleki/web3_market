import { NavbarItemProps } from "../../global"

const NavbarItem = ({ title, classProps }: NavbarItemProps) => {
  const showProps = classProps || "No props"
  // console.log(showProps)
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

export default NavbarItem