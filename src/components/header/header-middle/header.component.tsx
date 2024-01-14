import header from "./header.module.scss"
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className={header.headerMiddleWrap}>
            <div className={header.headerLogoWrap}>
                <span className={header.headerLogoTitle}>Movie</span>
            </div>
            <div className={header.headerSearchWrap}>
                <input type="text" placeholder="Search . . . "/>
                <FontAwesomeIcon  className={header.headerSearchIcon} icon={faMagnifyingGlass}/>
            </div>
            <div className={header.headerLogInWrap}>
                {/* <button className={header.headerLogInButton}>Log out</button> */}
                <Link to={"/sign-in"} >
                <button className={header.headerLogInButton}><FontAwesomeIcon className={header.faUser} icon={faUser}/></button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderComponent;