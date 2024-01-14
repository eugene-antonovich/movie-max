import sign from "./sign-in.module.scss";
import SignInComponent from "../../components/registration-form/sign-in-form/sign-in.component";

const SignIn = () => {
  return (
    <div className="container">
      <h3 className={sign.signInTitle}>Sign In</h3>
      <SignInComponent />
    </div>
  );
};

export default SignIn;
