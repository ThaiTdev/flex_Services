import styles from "./LinkPro.module.scss";
import { Link } from "react-router-dom";

export default function LinkPro() {
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center  ${styles.ProLink}`}
    >
      <div
        className={`d-flex flex-row  justify-content-between  align-items-end ${styles.ProInfo}`}
      >
        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={` fz-12 mb-10  `}
          href="/"
        >
          <p>Mes restaurants</p>
        </Link>
        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={` fz-12 mb-10  `}
          href="/"
        >
          <span>Editer</span>
        </Link>
      </div>

      <div
        className={`d-flex flex-row  justify-content-between  align-items-center p-10  ${styles.Menu}`}
      >
        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={`d-flex flex-column  justify-content-between  align-items-center fz-12 ${styles.Accueil} `}
          href="/"
        >
          <img src="../images/Menu/shop.png" alt="Maison" />
          <p className="m-0 mt-5">Accueil</p>
        </Link>

        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={`d-flex flex-column  justify-content-between  align-items-center  fz-12 ${styles.Gestion} `}
          href="/"
        >
          <img src="../images/Menu/gestion.png" alt="liste" />
          <p className="m-0 mt-5">Gestion</p>
        </Link>

        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={`d-flex flex-column  justify-content-between  align-items-center  fz-12 ${styles.Profil} `}
          href="/"
        >
          <img src="../images/Menu/profil.png" alt="avatar" />
          <p className="m-0 mt-5">Profil</p>
        </Link>

        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={`d-flex flex-column  justify-content-between  align-items-center fz-12 ${styles.Param} `}
          href="/"
        >
          <img src="../images/Menu/path.png" alt="coeur" />
          <p className="m-0 mt-5">Paramètre</p>
        </Link>
      </div>
      <div
        className={`d-flex flex-row  justify-content-between align-items-end   ${styles.ProInfo2}`}
      >
        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={` fz-12 mb-10  `}
          href="/"
        >
          <p>Mes postes</p>
        </Link>
        <Link
          to="/ForgotPassword"
          style={{ textDecoration: "none" }}
          className={` fz-12 mb-10  `}
          href="/"
        >
          <span>Editer</span>
        </Link>
      </div>
    </div>
  );
}
