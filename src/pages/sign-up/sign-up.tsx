import sign from "./sign-up.module.scss";
import SignUpComponent from "../../components/registration-form/sign-up-form/sign-up.component";
import Confirmation from "./confirmation";
import { useSelector } from "react-redux";
import { initialStateTypes } from "../../interface/interface";

const SignUp = () => {
  const isCorrectData = useSelector((state: initialStateTypes) => state.registration);

  return (
    <div className="container">
      {!isCorrectData ? <>
        <h3 className={sign.signUpTitle}>Sign Up</h3>
          <SignUpComponent />
      </> : <Confirmation/>}
      
    </div>
  );
};

export default SignUp;
