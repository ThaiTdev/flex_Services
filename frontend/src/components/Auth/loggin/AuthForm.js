import { useState } from "react";
import { useInputControlAuthForm } from "../../Hooks/useInputControlAuthForm";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../../_services/accountService";

function AuthForm() {
  const [checkpassWord, setCheckPassWord] = useState(true);
  const [register, handleSubmit, errors] = useInputControlAuthForm();
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data.email);
    // console.log(data.password);
    try {
      accountService
        .login(data, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          accountService.saveToken(res.data.token);
          setError(res.data.message);
          if (res.data.data.categorie === "pro") {
            navigate("/ProHome");
          } else {
            navigate("/CustomerHome");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  function handleShowPassWord() {
    setCheckPassWord(false);
    const value = document.getElementById("password");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWord(true);
      value.type = "password";
    }
  }

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center ${styles.AuthPage}`}
    >
      <div className={`${styles.box_title}`}>
        <h1 className={styles.title}> Se connecter</h1>
        <img src="./images/tâche.png" alt="tâche jaune" />
      </div>

      <form
        className={` d-flex flex-column justify-content-between  ${styles.box_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={` d-flex flex-column ${styles.box_input} `}>
          <label htmlFor="email" className="fz-12 mb-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="fz-12 mb-10 "
            name="email"
            {...register("email")}
          />
          {error && <p className="errorsYup">{error}</p>}
          {errors.email && <p className="errorsYup">{errors.email.message}</p>}
          <label htmlFor="password" className="fz-12  mb-10">
            Mot de passe
          </label>
          <div className={styles.box_password}>
            <input
              type="password"
              id="password"
              className="fz-12 mb-10"
              name="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="errorsYup">{errors.password.message}</p>
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

          <Link
            to="/ForgotPassword"
            style={{ textDecoration: "none" }}
            className={`fz-12 ${styles.mot2pass} `}
            href="/"
          >
            mot de passe oublié ?
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end mt-20 ">
          <button
            type="submit"
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-primary fz-12 mb-20 "
          >
            <span>Se connecter</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
          <Link to="/RegisterForm" style={{ textDecoration: "none" }}>
            <button
              className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
              type="button"
            >
              <span>S'inscrire</span>
              <i className="fa-solid fa-arrow-right-long fz-20 "></i>
            </button>
          </Link>
        </div>
      </form>

      <div
        className={`d-flex flex-row justify-content-around  align-items-center ${styles.social}`}
      >
        <button className={`btn  ${styles.gog} `} onClick={() => {}}>
          Google
        </button>
        <button className={`btn  ${styles.fb} `} onClick={() => {}}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
