import switcher from "./theme.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";

const ThemeSwitcher = () => {
  const [switchTheme, setSwitchTheme] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setSwitchTheme((switchTheme: boolean) => !switchTheme);
    setTheme((theme: boolean) => !theme)
  };
  return (
    <div className={switcher.themeWrap} onClick={toggleTheme}>
      <FontAwesomeIcon icon={faCircleHalfStroke} />
      <div
        className={switchTheme ? switcher.themeSwitcher : switcher.themeSwitcherDark}
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
