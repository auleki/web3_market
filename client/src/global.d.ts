import { Dispatch, SetStateAction } from "react";

export type NavbarItemProps = {
  title: string;
  classProps?: string;
}

export type MobileNavbarProps = {
  closeNavbar: Dispatch<SetStateAction<boolean>>;
  menuItems: string[];
}