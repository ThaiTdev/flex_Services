import styles from "./ResetPassword.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useInputControlReset } from "../../Hooks/useInputControlReset";
import { accountService } from "../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const [checkpassWord, setCheckPassWord] = useState(true);
  const [checkpassWordConfirm, setCheckPassWordConfirm] = useState(true);
  const [register, handleSubmit, errors] = useInputControlReset();
  const [messageErreur, setMessageErreur] = useState("");
  const [messageOk, setMessageOk] = useState(false);
  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    try {
      accountService
        .resetPassword(data, token, {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.messageValide);

          setMessageErreur(res.data.messageErreur);
          if (res.data.messageValide) {
            setMessageOk(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  function handleShowPassWord() {
    setCheckPassWord(false);
    const value = document.getElementById("passwordUpdate");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWord(true);
      value.type = "password";
    }
  }

  function handleShowPassWordConfirm() {
    setCheckPassWordConfirm(false);
    const value = document.getElementById("passwordConfirm");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWordConfirm(true);
      value.type = "password";
    }
  }

  return (
    <div className={`${styles.PageGlobale}`}>
      <div
        className={`d-flex flex-column justify-content-between p-20 ${styles.UpdatePage}`}
      >
        <div
          className={` d-flex flex-column justify-content-center ${styles.box_head}`}
        >
          <div
            className={`d-flex flex-column justify-content-center ${styles.title}`}
          >
            <Link
              to="/AuthForm"
              style={{ textDecoration: "none", zIndex: "1000" }}
            >
              <i className="fa-solid fa-arrow-left fz-20 "></i>
            </Link>
            <h4 className={styles.title}>Mot de passe oublié</h4>
          </div>
        </div>

        <form
          className={`d-flex flex-column justify-content-between align-items-center  ${styles.box_form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className={`d-flex flex-column justify-content-start ${styles.box_input}`}
          >
            <div>
              {/* passeword update */}
              {messageErreur && <p className="errorsYup">{messageErreur}</p>}
              <label htmlFor="password" className="fz-12  mb-10">
                Nouveau Mot de passe
              </label>
              <div className={styles.box_password}>
                <input
                  type="password"
                  id="passwordUpdate"
                  className="fz-12 mb-10"
                  {...register("passwordReset")}
                  required
                />
                {errors.passwordReset && (
                  <p className="errorsYup">{errors.passwordReset.message}</p>
                )}
                <div>
                  {checkpassWord ? (
                    <i
                      onClick={handleShowPassWord}
                      className="fa-regular fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      onClick={handleShowPassWord}
                      className="fa-regular fa-eye"
                    ></i>
                  )}
                </div>
              </div>
            </div>
            {/* passeword confirm */}
            <div className={`d-flex flex-column ${styles.box_input} `}>
              <label htmlFor="password" className="fz-12  mb-10">
                Confirmer Mot de passe
              </label>
              <div className={styles.box_password}>
                <input
                  type="password"
                  id="passwordConfirm"
                  className="fz-12 mb-10"
                  {...register("passwordConfimReset")}
                  required
                />
                {errors.passwordConfimReset && (
                  <p className="errorsYup">
                    {errors.passwordConfimReset.message}
                  </p>
                )}
                <div>
                  {checkpassWordConfirm ? (
                    <i
                      onClick={handleShowPassWordConfirm}
                      className="fa-regular fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      onClick={handleShowPassWordConfirm}
                      className="fa-regular fa-eye"
                    ></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="btn-next btn-primary fz-12 mb-20 " type="submit">
            <span>CHANGER MON MOT DE PASSE</span>
          </button>
        </form>
      </div>
      {messageOk && (
        <div
          className={`d-flex flex-column justify-content-center align-items-center  ${styles.valide_container}`}
        >
          <div
            className={`d-flex flex-column justify-content-center align-items-center p-20  ${styles.valide_box}`}
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-20 `}
            >
              <img
                className={styles.valide_img1}
                src="../../../images/Decor.jpg"
                alt="tâche jaune"
              />
              <img
                className={styles.valide_img2}
                src="../../../images/Key.jpg"
                alt="tâche jaune"
              />
            </div>
            <p>Votre mot de passe à été changé</p>
            <button
              className="btn  btn-co btn-primary"
              onClick={() => {
                navigate("/AuthForm");
              }}
            >
              Parfait !
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
