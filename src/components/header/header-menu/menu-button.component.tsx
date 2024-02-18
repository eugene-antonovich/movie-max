import menu from "./menu-button.module.scss";
import MenuItem from "./menu-item.component";
import FormButton from "../../registration-form/form-button/form-button.component";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notAuthorization } from "../../../actions/action";
import {
  faBookmark,
  faGear,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { initialStateTypes } from "../../../interface/interface";

const MenuButton = () => {
  const dispatch = useDispatch();

  const [buttonMenu, setButtonMenu] = useState(true);

  const themeSwitch = () => {
    setButtonMenu((buttonMenu: boolean) => !buttonMenu);
  };

  const isAuthorized = useSelector((state: initialStateTypes) => state.authorization);

  const logOut = () => {
    dispatch(notAuthorization());
    localStorage.setItem("authorization", JSON.stringify(false));
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
  };
  
  return (
    <div className={menu.menu}>
      <button className={menu.menuButton} onClick={themeSwitch}>
        <span className={buttonMenu ? menu.line : menu.cross}></span>
      </button>
      <div className={!buttonMenu ? menu.menuListWrap : menu.display}>
        <ul className={menu.menuList}>
          <Link to={"/"}>
            <MenuItem
              title="Home"
              icon={<FontAwesomeIcon icon={faHouse} />}
              isActive={true}
            />
          </Link>
          <Link to={"/categories"}>
            <MenuItem
              title="Categories"
              icon={<FontAwesomeIcon icon={faList} />}
              isActive={true}
            />
          </Link>
          {isAuthorized ? (
            <Link to={"/favorites"}>
              <MenuItem
                title="Favorites"
                icon={<FontAwesomeIcon icon={faBookmark} />}
                isActive={isAuthorized}
              />
            </Link>
          ) : (
            <MenuItem
              title="Favorites"
              icon={<FontAwesomeIcon icon={faBookmark} />}
              isActive={isAuthorized}
            />
          )}
          <MenuItem
            title="Settings"
            icon={<FontAwesomeIcon icon={faGear} />}
            isActive={isAuthorized}
          />

          {isAuthorized ? (
            <div className={menu.menuListButton} onClick={logOut}>
              <FormButton title={"Log Out"} />
            </div>
          ) : (
            <Link to={"/sign-in"}>
              <div className={menu.menuListButton}>
                <FormButton title={"Sign In"} />
              </div>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
