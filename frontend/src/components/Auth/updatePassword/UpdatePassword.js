import styles from "./UpdatePassword.module.scss";
import { useState } from "react";

function UpdatePassword() {
  const [checkpassWord, setCheckPassWord] = useState(true);
  const [checkpassWordConfirm, setCheckPassWordConfirm] = useState(true);

  function handleShowPassWord() {
    setCheckPassWord(false);
    const value = document.getElementById("passwordUpdate");
    if (value.type === "password") {
      value.type = "text";
    }
  }

  function handlehidePassWord() {
    const value = document.getElementById("passwordUpdate");
    setCheckPassWord(true);
    if (value.type === "text") {
      value.type = "password";
    }
  }
  function handleShowPassWordConfirm() {
    setCheckPassWordConfirm(false);
    const value = document.getElementById("passwordConfirm");
    if (value.type === "password") {
      value.type = "text";
    }
  }

  function handlehidePassWordConfirm() {
    const value = document.getElementById("passwordConfirm");
    setCheckPassWordConfirm(true);
    if (value.type === "text") {
      value.type = "password";
    }
  }
  return (
    <div
      className={`d-flex flex-column justify-content-between p-20 ${styles.UpdatePage}`}
    >
      <div
        className={` d-flex flex-column justify-content-center ${styles.box_head}`}
      >
        <div
          className={`d-flex flex-column justify-content-center ${styles.title}`}
        >
          <i onClick={() => {}} className="fa-solid fa-arrow-left fz-20 "></i>
          <h4 className={styles.title}>Mot de passe oublié</h4>
        </div>
      </div>

      <form
        className={`d-flex flex-column justify-content-between align-items-center  ${styles.box_form}`}
        onSubmit={() => {}}
      >
        <div
          className={`d-flex flex-column justify-content-start ${styles.box_input}`}
        >
          <div>
            {/* passeword update*/}
            <label htmlFor="password" className="fz-12  mb-10">
              Nouveau Mot de passe
            </label>
            <div className={styles.box_password}>
              <input
                type="password"
                id="passwordUpdate"
                className="fz-12 mb-10"
                required
              />
              <div>
                {checkpassWord ? (
                  <i
                    onClick={handleShowPassWord}
                    className="fa-regular fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    onClick={handlehidePassWord}
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
                required
              />
              <div>
                {checkpassWordConfirm ? (
                  <i
                    onClick={handleShowPassWordConfirm}
                    className="fa-regular fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    onClick={handlehidePassWordConfirm}
                    className="fa-regular fa-eye"
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn-next btn-primary fz-12 mb-20 "
          type="button"
          onClick={() => {}}
        >
          <span>CHANGER MON MOT DE PASSE</span>
        </button>
      </form>
    </div>
  );
}

export default UpdatePassword;
