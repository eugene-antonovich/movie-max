import switcher from "./theme.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const ThemeSwitcher = () => {
  const { theme , setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((theme: boolean) => !theme);
    localStorage.setItem('theme', JSON.stringify(theme))
  };

  return (
    <div className={switcher.themeWrap} onClick={toggleTheme}>
      <FontAwesomeIcon icon={faCircleHalfStroke} />
      <div
        className={
          theme ? switcher.themeSwitcher : switcher.themeSwitcherDark
        }
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
