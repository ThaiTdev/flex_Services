import styles from "./WelcomePageFour.module.scss";
import { Link } from "react-router-dom";

function WelcomePageFour() {
  return (
    <div
      className={` d-flex flex-column justify-content-center align-items-center ${styles.WelcomeFour}`}
    >
      <div className={`${styles.WelcomeTextBox}`}>
        <h1>
          Vous êtes <br />
          motivé ?
        </h1>
        <p>Vous cherchez un complément de revenus ?</p>
        <p>
          Vous préférez travailler à votre rythme, selon vos conditions, le tout
          en étant le plus fléxible possible ?
        </p>
        <p>
          Vous être étudiant et vous souhaitez occuper vos trous entre les cours
          ?
        </p>
        <p>
          Trouvez un créneau qui vous correspond, postulez, et travaillez à
          votre rythme dans un secteur en constante recherche.
        </p>
      </div>

      <div
        className={`d-flex flex-row justify-content-end  align-items-end  ${styles.WelcomeNext}`}
      >
        <Link to="/AuthForm" style={{ textDecoration: "none" }}>
          <button
            className={`d-flex flex-row justify-content-between align-items-center btn-co fz-12 mb-20 `}
            type="button"
          >
            <span>Commencer</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePageFour;
