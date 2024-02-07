import sign from "./sign-up.module.scss";
import ConfirmationComponent from "../../components/registration-form/confirmation/confirmation.component";

const Confirmation = () => {
  return (
    <div className="container">
      <h3 className={sign.signUpTitle}>Confirmation</h3>
      <ConfirmationComponent />
    </div>
  );
};

export default Confirmation;
