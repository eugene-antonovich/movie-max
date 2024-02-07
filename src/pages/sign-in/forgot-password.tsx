import sign from "./sign-in.module.scss";
import ForgotPasswordComponent from "../../components/registration-form/forgot-password/forgot-password.component";

const ForgotPassword = () => {
  return (
    <div className="container">
      <h3 className={sign.signInTitle}>Forgot password</h3>
      <ForgotPasswordComponent />
    </div>
  );
};

export default ForgotPassword;
