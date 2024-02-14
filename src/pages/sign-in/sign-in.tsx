import sign from "./sign-in.module.scss";
import SignInComponent from "../../components/registration-form/sign-in-form/sign-in.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignIn = () => {
  const isAuthorized = useSelector((state: any) => state.authorization);
  
  useEffect(() => {
  },[isAuthorized])

  return (
    <>
      {!isAuthorized && (
        <div className="container">
          <h3 className={sign.signInTitle}>Sign In</h3>
          <SignInComponent />
        </div>
      )}
    </>
  );
};

export default SignIn;
