import sign from "./sign-in.module.scss";
import FormButton from "../form-button/form-button.component";
import { Link } from "react-router-dom";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SignInComponent = () => {

 const funcTest = () => {
  return console.log(JSON.parse(localStorage.getItem('verify')!))
 }
  const onlyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [viewPassword, setViewPassword] = useState("password");
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const getPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const viewPasswordFunc = () => {
    viewPassword === "password"
      ? setViewPassword("text")
      : setViewPassword("password");
  };

  const funcName = () => {
    onlyEmail.test(email)
      ? setCheckEmail(true)
      : setCheckEmail(false);
  };

  const funcPassword = () => {
    password.length > 6 ? setCheckPassword(true) : setCheckPassword(false);
  };

  const token = async () => {
    await fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("refresh", JSON.stringify(data.refresh));
        localStorage.setItem("access", JSON.stringify(data.access));
      });
    try {
      const response_verify = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/verify/",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("access")!),
          }),
        }
      );
      return localStorage.setItem("verify", JSON.stringify(response_verify.ok));
    } catch (error) {}
    funcName();
    funcPassword();

    funcTest()
  };

  return (
    <div className={sign.signInWrap}>
      <div className={sign.elementWrap}>
        <input
          type="email"
          placeholder={"email"}
          className={checkEmail ? sign.elementInput : sign.elementInputDisabled}
          onChange={getEmail}
        />
      </div>
      <div className={sign.elementWrap}>
        <input
          type={viewPassword}
          placeholder={"password"}
          className={
            checkPassword ? sign.elementInput : sign.elementInputDisabled
          }
          onChange={getPassword}
        />
      </div>
      <button className={sign.viewPassword} onClick={viewPasswordFunc}>
        {viewPassword === "password" ? (
          <FontAwesomeIcon icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon icon={faEye} />
        )}
      </button>
      <div className={sign.forgotWrap}>
        <Link to={"/forgot-password"}>
          <span className={sign.forgot}>Forgot your password?</span>
        </Link>
      </div>
      <Link to={"/"}>
        <div onClick={token}>
          <FormButton title={"Sign in"} />
        </div>
      </Link>
      <div className={sign.signUpWrap}>
        <span>
          Don't have an account?
          <Link
            to={"/sign-up"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={sign.signUp}> Sign Up</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignInComponent;
