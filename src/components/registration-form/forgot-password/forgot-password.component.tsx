import forgot from "./forgot-password.module.scss";
import FormButton from "../form-button/form-button.component";
import FormElement from "../form-element/form-element.component";
import { Link } from "react-router-dom";

const ForgotPasswordComponent = () => {
  return (
    <div className={forgot.forgotWrap}>
      <div className={forgot.forgotDescription}>
        <p>
          Write the email to which your account is registered, we will send you
          instructions on how to change your password
        </p>
      </div>
      <FormElement placeholder={"email"} type={"email"} />
      <Link to={"/"}>
        <FormButton title={"Ready"} />
      </Link>
    </div>
  );
};

export default ForgotPasswordComponent;
