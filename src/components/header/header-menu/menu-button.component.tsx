import menu from "./menu-button.module.scss";
import MenuItem from "./menu-item.component";
import FormButton from "../../registration-form/form-button/form-button.component";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthorizationContext } from "../../../App";
import {
  faBookmark,
  faFire,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const MenuButton = () => {
  const [buttonMenu, setButtonMenu] = useState(true);

  const { authorization, setAuthorization } = useContext(AuthorizationContext);

  const themeSwitch = () => {
    setButtonMenu((buttonMenu: boolean) => !buttonMenu);
  };

  const changeAuthorization = () => {
    setAuthorization((authorization: boolean) => !authorization);
  };

  return (
    <div className={menu.menu}>
      <button className={menu.menuButton} onClick={themeSwitch}>
        <span className={buttonMenu ? menu.line : menu.cross}></span>
      </button>
      <div className={!buttonMenu ? menu.menuListWrap : menu.display}>
        <ul className={menu.menuList}>
          <MenuItem
            title="Home"
            icon={<FontAwesomeIcon icon={faHouse} />}
            isActive={true}
          />
          <MenuItem
            title="Trends"
            icon={<FontAwesomeIcon icon={faFire} />}
            isActive={authorization}
          />
          <MenuItem
            title="Favorites"
            icon={<FontAwesomeIcon icon={faBookmark} />}
            isActive={authorization}
          />
          <MenuItem
            title="Settings"
            icon={<FontAwesomeIcon icon={faGear} />}
            isActive={authorization}
          />
          <div className={menu.menuListButton} onClick={changeAuthorization}>
            <FormButton title={authorization ? "Log Out" : "Sign In"} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
