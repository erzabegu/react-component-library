import { FC } from "react";
import { DropdownProps } from "./Dropdown.types";
import DropdownItem from "./DropdownItem";
declare const Dropdown: FC<DropdownProps> & {
    Item: typeof DropdownItem;
};
export default Dropdown;
