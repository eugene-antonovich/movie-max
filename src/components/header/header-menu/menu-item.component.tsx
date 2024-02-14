import menu from "./menu-button.module.scss";

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <li className={props.isActive ? menu.item : menu.itemDisabled}>
      <span className={menu.itemIcon}>{props.icon}</span>
      {props.title}
    </li>
  );
};

export default MenuItem;
