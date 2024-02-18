import confirm from "./confirmation.module.scss";
import FormButton from "../form-button/form-button.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConfirmationComponent = () => {
  const [token, setToken] = useState("");

  const getToken = (event: any) => {
    setToken(event.target.value);
  };

  const dataEmail = JSON.parse(localStorage.getItem("data-email")!);
  const dataPassword = JSON.parse(localStorage.getItem("data-password")!);

  const userActivationClick = () => {
    const url = token.split("/");
    const urlUid = url[url.length - 2];
    const urlToken = url[url.length - 1];

    fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        uid: urlUid,
        token: urlToken,
      }),
    })
      .then((response) => {
        console.log(response);
        return fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: dataEmail,
            password: dataPassword,
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("refresh", JSON.stringify(data.refresh));
        localStorage.setItem("access", JSON.stringify(data.access));
      })
      .catch((error) => console.log("error", error));
    localStorage.removeItem("data-password");
    localStorage.removeItem("data-email");
  };

  return (
    <div className={confirm.confirmationWrap}>
      <div className={confirm.confirmationDescription}>
        <p>
          A token has been sent to your email{" "}
          <span className={confirm.confirmationEmail}>
            {localStorage.getItem("data-email")}
          </span>{" "}
          address to confirm your registration. Paste this token to complete
          registration.
        </p>
      </div>
      <div className={confirm.confirmationInputWrap}>
        <div className={confirm.elementWrap}>
          <input
            type="text"
            placeholder={"enter the link here"}
            className={confirm.elementInput}
            onChange={getToken}
            id="link"
          />
        </div>
      </div>
      <Link to={"/sign-in"}>
        <div onClick={userActivationClick}>
          <FormButton title={"Ready"} />
        </div>
      </Link>
    </div>
  );
};

export default ConfirmationComponent;
