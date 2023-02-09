import styles from "./WelcomePage.module.scss";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className={`${styles.WelcomePage}`}>
      <div
        className={`d-flex flex-row justify-content-center align-items-end ${styles.WelcomeLogo}`}
      >
        <img src="./images/logo/Logo.png" alt="logo-flex" />
      </div>

      <div
        className={`d-flex flex-row justify-content-center align-items-center  ${styles.WelcomeText} `}
      >
        <h1>Bienvenue sur Flex</h1>
      </div>

      <div
        className={`d-flex flex-row justify-content-end align-items-center  ${styles.WelcomeNext}`}
      >
        <Link to="/WelcomeSlider" style={{ textDecoration: "none" }}>
          <button
            className={`d-flex flex-row justify-content-between align-items-center btn-co fz-12 mb-20 `}
          >
            <span>Suivant</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
