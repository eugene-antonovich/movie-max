import { Link } from "react-router-dom";
import FormButton from "../form-button/form-button.component";
import FormElement from "../form-element/form-element.component";
import confirm from "./confirmation.module.scss";

const ConfirmationComponent = () => {
  return (
    <div className={confirm.confirmationWrap}>
      <div className={confirm.confirmationDescription}>
        <p>
          A token has been sent to your email address to confirm your
          registration. Paste this token to complete registration.
        </p>
      </div>
      <div className={confirm.confirmationInputWrap}>
        <FormElement placeholder="enter the token here" type={'text'}/>
      </div>
      <Link to={'/'}>
      <FormButton title={"Ready"}/>
      </Link>
    </div>
  );
};

export default ConfirmationComponent;
