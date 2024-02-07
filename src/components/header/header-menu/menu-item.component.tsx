import menu from "./menu-button.module.scss";
import { useContext } from "react";
import { AuthorizationContext } from "../../../App";

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}
const MenuItem = (props: MenuItemProps) => {
  const { authorization } = useContext(AuthorizationContext);

  return (
    <li className={props.isActive ? menu.item : menu.itemDisabled}>
      <span className={menu.itemIcon}>{props.icon}</span>
      {props.title}
    </li>
  );
};

export default MenuItem;
