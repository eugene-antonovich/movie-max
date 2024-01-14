import menu from "./menu-button.module.scss";
import { useState } from "react";

const MenuButton = () => {

  const [buttonMenu, setButtonMenu] = useState(true);

  const themeSwitch = () => {
    setButtonMenu((buttonMenu: boolean) => !buttonMenu)
  }

  return (
    <button className={menu.menuButton} onClick={themeSwitch}>
      <span className={buttonMenu ? menu.line : menu.cross}></span>
    </button>
  );
};

export default MenuButton;
