import header from "./header.module.scss"
import MenuButton from "../../components/header/header-menu/menu-button.component";
import HeaderComponent from "../../components/header/header-middle/header.component";
import ThemeSwitcher from "../../components/header/header-theme-switcher/theme-switcher.component";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
        <div className={[header.headerWrap, theme ? document.body.style.backgroundColor = 'White' : document.body.style.backgroundColor = 'rgb(45, 45, 45)'].join(' ')}>
        <MenuButton />
        <HeaderComponent />
        <ThemeSwitcher />
        </div>
    </header>
  );
};

export default Header;
