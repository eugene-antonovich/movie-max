import { Link } from "react-router-dom";
import FormButton from "../form-button/form-button.component";
import FormElement from "../form-element/form-element.component";
import sign from "./sign-in.module.scss";

const SignInComponent = () => {
  return (
    <div className={sign.signInWrap}>
      <FormElement placeholder={"email"} type={"email"} />
      <FormElement placeholder={"password"} type={"password"} />
      <div className={sign.forgotWrap}>
        <span className={sign.forgot}>Forgot your password?</span>
      </div>
      <FormButton title={"Sign in"} />
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
