import sign from "./sign-up.module.scss";
import FormButton from "../form-button/form-button.component";
import FormElement from "../form-element/form-element.component";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  return (
    <div className={sign.signUpWrap}>
      <FormElement placeholder={"first name"} type={"text"} />
      <FormElement placeholder={"last name"} type={"text"} />
      <FormElement placeholder={"email"} type={"email"} />
      <FormElement placeholder={"password"} type={"password"} />
      <FormElement placeholder={"repeat password"} type={"password"} />
      <Link to={"/confirmation"}>
        <FormButton title={"Sign up"} />
      </Link>
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
