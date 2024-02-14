import header from "./header.module.scss";
import MenuButton from "../../components/header/header-menu/menu-button.component";
import HeaderComponent from "../../components/header/header-middle/header.component";
import ThemeSwitcher from "../../components/header/header-theme-switcher/theme-switcher.component";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const body = document.body;

  return (
    <header>
      <div
        className={[
          header.headerWrap,
          theme
            ? (body.style.backgroundColor = "White")
            : (body.style.backgroundColor = "rgb(45, 45, 45)"),
          theme
            ? (body.style.transition = "0.5s")
            : (body.style.transition = "0.5s"),
        ].join(" ")}
      >
        <MenuButton />
        <HeaderComponent />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
