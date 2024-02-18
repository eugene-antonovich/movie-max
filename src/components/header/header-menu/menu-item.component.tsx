import menu from "./menu-button.module.scss";
import { MenuItemProps } from "../../../interface/interface";

const MenuItem = (props: MenuItemProps) => {
  return (
    <li className={props.isActive ? menu.item : menu.itemDisabled}>
      <span className={menu.itemIcon}>{props.icon}</span>
      {props.title}
    </li>
  );
};

export default MenuItem;
