import header from "./header.module.scss";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  notAuthorization,
  searchMovies,
  showMoviesBySearchIsNotActive,
} from "../../../actions/action";
import { initialStateTypes } from "../../../interface/interface";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const getInputValue = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      if (inputValue.length <= 0) {
        dispatch(showMoviesBySearchIsNotActive());
      } else {
        dispatch(searchMovies(inputValue) as any);
      }
    }
  };

  const search = () => {
    if (inputValue.length <= 0) {
      dispatch(showMoviesBySearchIsNotActive());
    } else {
      dispatch(searchMovies(inputValue) as any);
    }
  };

  const isAuthorized = useSelector((state: initialStateTypes) => state.authorization)

  const logOut = () => {
    dispatch(notAuthorization())
    localStorage.setItem('authorization', JSON.stringify(false))
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
  }
  return (
    <div className={header.headerMiddleWrap}>
      <div className={header.headerLogoWrap}>
        <span className={header.headerLogoTitle}>Movie</span>
      </div>
      <div className={header.headerSearchWrap}>
        <input
          type="text"
          placeholder="Search . . . "
          onChange={getInputValue}
          onKeyPress={handleKeyPress}
        />
        <Link to={"/"}>
          <FontAwesomeIcon
            className={header.headerSearchIcon}
            icon={faMagnifyingGlass}
            onClick={search}
          />
        </Link>
      </div>
        <Link to={"/sign-in"}>
          <div className={header.headerLogInWrap}>
            {isAuthorized ? (
              <button
                className={header.headerLogInButton}
                onClick={logOut}
              >
                Log out
              </button>
            ) : (
              <button
                className={header.headerLogInButton}
              >
                <FontAwesomeIcon className={header.faUser} icon={faUser} />
              </button>
            )}
          </div>
        </Link>
    </div>
  );
};

export default HeaderComponent;
