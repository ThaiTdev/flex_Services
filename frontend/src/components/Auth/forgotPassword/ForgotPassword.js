import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";
import { useInputControlforgot } from "../../Hooks/useInputControlforgot";
import { accountService } from "../../../_services/accountService";
import { useState } from "react";

function ForgotPassword() {
  const [register, handleSubmit, errors] = useInputControlforgot();
  const [messageValide, setMessageValide] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    try {
      accountService
        .forgotPassword(data, {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setMessageValide(res.data.messageValide);
          setMessageErreur(res.data.messageErreur);
          console.log(res);
        });
    } catch (error) {}
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between p-20 ${styles.forgotPage}`}
    >
      <div
        className={` d-flex flex-column justify-content-center ${styles.box_head}`}
      >
        <div
          className={`d-flex flex-column justify-content-center ${styles.title}`}
        >
          <Link to="/AuthForm" style={{ textDecoration: "none" }}>
            <i className="fa-solid fa-arrow-left fz-20 "></i>
          </Link>
          <h4 className={styles.title}>Forgot Password</h4>
        </div>
        <p>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
      </div>

      <form
        className={`d-flex flex-column justify-content-between align-items-center  ${styles.box_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`d-flex flex-column ${styles.box_input} `}>
          {messageValide && <p className="valideYup">{messageValide}</p>}
          <label htmlFor="emailForgot" className="fz-12 mb-10">
            Email
          </label>
          <input
            type="email"
            id="emailForgot"
            name="emailForgot"
            className="fz-12 mb-10 "
            {...register("emailForgot")}
          />
          {messageErreur && <p className="errorsYup">{messageErreur}</p>}
        </div>

        <button className="btn-next btn-primary fz-12 mb-20 " type="submit">
          <span>SUIVANT</span>
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
