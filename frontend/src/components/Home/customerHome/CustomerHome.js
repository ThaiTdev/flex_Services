import { Link } from "react-router-dom";
import styles from "./CustomerHome.module.scss";

const CustomerHome = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-between  align-items-center b2  ${styles.CustomerHomePage}`}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center b4 ${styles.CustomerHomeContainer}`}
      >
        <p>Mon profil</p>
        <div
          className={`d-flex flex-column justify-content-center align-items-center b1 ${styles.CustomerForm}`}
        >
          <div className={`${styles.CustomerAvatar}`}>
            <img src="/images/professionnel/homme.png" alt="photo_de_profil" />
          </div>
          <div
            className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.CustomerInput}`}
          >
            <p>Nom</p>
            <span>Thai Thierry</span>
          </div>
          <div
            className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.CustomerInput}`}
          >
            <p> Email</p>
            <span>t.thai@outlook.fr</span>
          </div>
          <div
            className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.CustomerInput}`}
          >
            <p>Téléphone</p>
            <span>+33 6 63 00 67 27</span>
          </div>
          <div
            className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.CustomerInput}`}
          >
            <p>Date de naissance</p>
            <span>22/08/1981</span>
          </div>
        </div>

        <div
          className={`d-flex flex-column justify-content-center align-items-center b3 ${styles.CustomerLink}`}
        >
          <Link>
            <div
              className={`d-flex flex-row  justify-content-between  align-items-center b1 ${styles.CustomerInfo}`}
            >
              <p>Mes restaurant</p>
              <span>Editer</span>
            </div>
          </Link>
          <Link>
            <div
              className={`d-flex flex-row  justify-content-between  align-items-center b1  ${styles.CustomerInfo2}`}
            >
              <p>Mes poste</p>
              <span>Editer</span>
            </div>
          </Link>
        </div>

        <div
          className={`d-flex flex-row  justify-content-center  align-items-center b4  ${styles.CustomerDeco}`}
        >
          <p>Déconnexion</p>
        </div>
      </div>
    </div>
  );
};
export default CustomerHome;
