import { useState } from "react";
import styles from "./Register.module.scss";
import { useInputControlRegister } from "../../Hooks/HookAuth/useInputControlRegister";
import { accountService } from "../../../_services/accountService";

function RegisterForm() {
  const [checkpassWord, setCheckPassWord] = useState(true);
  const [checkpassWordConfirm, setCheckPassWordConfirm] = useState(true);
  const [register, handleSubmit, setValue, errors] = useInputControlRegister();
  const [mailVerif, setMailVerif] = useState("");
  const [message, setMessage] = useState("");

  const showData = async (data) => {
    let value = {
      email: data.emailRegister,
      password: data.passwordRegister,
      categorie: data.selectedOption,
    };

    try {
      accountService
        .register(value, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          setMailVerif(res.data.message1);
          setMessage(res.data.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  function handleShowPassWord() {
    setCheckPassWord(false);
    const value = document.getElementById("passwordRegister");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWord(true);
      value.type = "password";
    }
  }

  function handleShowPassWordConfirm() {
    setCheckPassWordConfirm(false);
    const value = document.getElementById("passwordConfimRegister");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWordConfirm(true);
      value.type = "password";
    }
  }

  const options = [
    { label: "--choisir mon profil--", value: "" },
    { label: "Restaurateur", value: "pro" },
    { label: "Travailleur", value: "customer" },
  ];

  const handleChange = (e) => {
    setValue("selectedOption", e.target.value);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center ${styles.AuthPage}`}
    >
      <div className={`${styles.box_title}`}>
        <h1 className={styles.title}> S'inscrire</h1>
        <img src="./images/tâche.png" alt="tâche jaune" />
      </div>

      <form
        className={` d-flex flex-column justify-content-between  ${styles.box_form}`}
        onSubmit={handleSubmit(showData)}
      >
        <div
          className={`d-flex flex-column justify-content-start ${styles.box_input}`}
        >
          {message && (
            <p className="valideYup">
              {message} <i className="fa-solid fa-face-smile smilleIcone"></i>
            </p>
          )}
          <label htmlFor="emailRegister" className="fz-12 mb-10">
            Email
          </label>
          <input
            type="email"
            id="emailRegister"
            name="emailRegister"
            className="fz-12 mb-10 "
            {...register("emailRegister")}
            required
          />
          {mailVerif && <p className="errorsYup">{mailVerif}</p>}
          {errors.emailRegister && (
            <p className="errorsYup">{errors.emailRegister.message}</p>
          )}
          <div>
            {/* passeword update*/}
            <label htmlFor="passwordRegister" className="fz-12  mb-10">
              Mot de passe
            </label>
            <div className={styles.box_password}>
              <input
                type="password"
                id="passwordRegister"
                className="fz-12 mb-10"
                name="passwordRegister"
                {...register("passwordRegister")}
                required
              />
              <div>
                {errors.passwordRegister && (
                  <p className="errorsYup">{errors.passwordRegister.message}</p>
                )}
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
          <div>
            <label htmlFor="passwordConfimRegister" className="fz-12  mb-10">
              Confirmer Mot de passe
            </label>
            <div className={styles.box_password}>
              <input
                type="password"
                id="passwordConfimRegister"
                className="fz-12 mb-10"
                name="passwordConfimRegister"
                {...register("passwordConfimRegister")}
                required
              />
              {errors.passwordConfimRegister && (
                <p className="errorsYup">
                  {errors.passwordConfimRegister.message}
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
              <div className="d-flex flex-column">
                <label
                  className="d-flex flex-column mb-10 fz-12 "
                  htmlFor="categorie"
                >
                  Je suis
                </label>

                <select
                  className="p-10 mb-10"
                  id="categorie"
                  onChange={handleChange}
                  name="selectedOption"
                  {...register("selectedOption")}
                >
                  {options.map(({ label, value }) => (
                    <option key={value} value={value} required>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.selectedOption && (
                  <p className="errorsYup">{errors.selectedOption.message}</p>
                )}
              </div>

              <p className="fz-12-classic ">
                En cliquant sur S'inscrire, vous acceptez sans réserve les
                conditions générales suivantes
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-primary fz-12"
            type="submit"
          >
            <span>S'inscrire</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>

      <div
        className={`d-flex flex-row justify-content-around  align-items-center ${styles.social}`}
      >
        <button className={`btn btn-gog`} onClick={() => {}}>
          Google
        </button>
        <button className={`btn btn-fb`} onClick={() => {}}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
