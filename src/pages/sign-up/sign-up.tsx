import sign from "./sign-up.module.scss"
import SignUpComponent from "../../components/registration-form/sign-up-form/sign-up.component";

const SignUp = () => {
    return (
      <div className="container">
        <h3 className={sign.signUpTitle}>Sign Up</h3>
        <SignUpComponent />
      </div>
    );
  };
  
  export default SignUp;
  