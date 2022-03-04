import { Dispatch, SetStateAction } from "react";

export type NavbarItemProps = {
  title: string;
  classProps?: string;
}

export type MobileNavbarProps = {
  closeNavbar: Dispatch<SetStateAction<boolean>>;
  menuItems: string[];
}

export type InputProps = {
  placeholder: string;
  name: string;
  className: string;
  step: string;
  type: string;
  value: string;
  onChange: () => string
}