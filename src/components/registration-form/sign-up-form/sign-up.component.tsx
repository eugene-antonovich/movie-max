import sign from "./sign-up.module.scss";
import FormButton from "../form-button/form-button.component";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { notRegistration, registration } from "../../../actions/action";

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const array: any = [];
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [viewPassword, setViewPassword] = useState("password");

  const [checkName, setCheckName] = useState(true);
  const [checkSurname, setCheckSurname] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const onlyLetters = /^[a-zA-Z]+$/;
  const onlyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const abc = () => {
    if (checkName && checkSurname && checkEmail && checkPassword) {
      console.log("123");
    } else {
      console.log("567");
    }
  };

  const signUpA = () => {
    funcName();
    funcSurname();
    funcEmail();
    funcPassword();
  };

  const getName = (event: any) => {
    setName(event.target.value);
  };

  const getSurname = (event: any) => {
    setSurname(event.target.value);
  };

  const getEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const getPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const getRepeatPassword = (event: any) => {
    setRepeatPassword(event.target.value);
  };

  const viewPasswordFunc = () => {
    viewPassword === "password"
      ? setViewPassword("text")
      : setViewPassword("password");
  };

  const func2 = () => {
    array.push({
      name: name,
      surname: surname,
      email: email,
      password: password,
    });
    signUpA();
    authorizationClick();
    console.log(array);
    abc();
  };

  const funcName = () => {
    onlyLetters.test(array[0].name) && array[0].name.length > 0
      ? setCheckName(true)
      : setCheckName(false);
  };

  const funcSurname = () => {
    onlyLetters.test(array[0].surname) && array[0].surname.length > 0
      ? setCheckSurname(true)
      : setCheckSurname(false);
  };

  const funcEmail = () => {
    onlyEmail.test(array[0].email) && array[0].email.length > 0
      ? setCheckEmail(true)
      : setCheckEmail(false);
  };

  const funcPassword = () => {
    repeatPassword === password && password.length >= 6
      ? setCheckPassword(true)
      : setCheckPassword(false);
  };

  const isCorrectData = useSelector((state: any) => state.registration);

  const authorizationClick = async () => {
    const request = await fetch(
      "https://studapi.teachmeskills.by/auth/users/",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: array[0].name,
          email: array[0].email,
          password: array[0].password,
          course_group: 1,
        }),
      }
    )
      .then((response) => response.ok)
      .catch((error) => console.log("error", error));
    if (request) {
      dispatch(registration());
    } else {
      dispatch(notRegistration());
    }
    abc();
    localStorage.setItem("data-email", JSON.stringify(array[0].email));
    localStorage.setItem("data-password", JSON.stringify(array[0].password));
  };

  return (
    <div className={sign.signUpWrap}>
      <div className={sign.elementWrap}>
        <label
          className={
            checkName
              ? sign.labelDarkDisplay
              : theme
              ? sign.label
              : sign.labelDark
          }
        >
          The name must contain only letters
        </label>
        <input
          type="text"
          placeholder={"first name"}
          className={checkName ? sign.elementInput : sign.elementInputDisabled}
          onChange={getName}
          id="name"
        />
      </div>
      <div className={sign.elementWrap}>
        <label
          className={
            checkSurname
              ? sign.labelDarkDisplay
              : theme
              ? sign.label
              : sign.labelDark
          }
        >
          Last name must contain only letters
        </label>
        <input
          type="text"
          placeholder={"last name"}
          className={
            checkSurname ? sign.elementInput : sign.elementInputDisabled
          }
          onChange={getSurname}
          id="surname"
        />
      </div>
      <div className={sign.elementWrap}>
        <label
          className={
            checkEmail
              ? sign.labelDarkDisplay
              : theme
              ? sign.label
              : sign.labelDark
          }
        >
          This field must contain "@ and ." And also the correct email
        </label>
        <input
          type="email"
          placeholder={"email"}
          className={checkEmail ? sign.elementInput : sign.elementInputDisabled}
          onChange={getEmail}
          id="email"
        />
      </div>
      <div className={sign.elementWrap}>
        <label
          className={
            checkPassword
              ? sign.labelDarkDisplay
              : theme
              ? sign.label
              : sign.labelDark
          }
        >
          Password must be at least 6 characters
        </label>
        <input
          type={viewPassword}
          placeholder={"password"}
          className={
            checkPassword ? sign.elementInput : sign.elementInputDisabled
          }
          onChange={getPassword}
          id="password"
        />
      </div>
      <div className={sign.elementWrap}>
        <label
          className={
            checkPassword
              ? sign.labelDarkDisplay
              : theme
              ? sign.label
              : sign.labelDark
          }
        >
          Password must be at least 6 characters
        </label>
        <input
          type={viewPassword}
          placeholder={"repeat password"}
          className={
            checkPassword ? sign.elementInput : sign.elementInputDisabled
          }
          onChange={getRepeatPassword}
          id="repeat-password"
        />
        <button className={sign.viewPassword} onClick={viewPasswordFunc}>
          {viewPassword === "password" ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </button>
      </div>
      <div onClick={func2}>
        {isCorrectData ? (
          <Link to={"/confirmation"}>
            <FormButton title={"Sign up"} />
          </Link>
        ) : (
          <FormButton title={"Sign up"} />
        )}
      </div>
      <div className={sign.signInWrap}>
        <span>
          You already have an account?
          <Link
            to={"/sign-in"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={sign.signIn}> Sign In</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpComponent;
