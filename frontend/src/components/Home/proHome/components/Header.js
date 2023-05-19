import styles from "./Header.module.scss";
import flex from "../../../../assets/images/logoFlex/Flex.png";
import picto from "../../../../assets/images/logoFlex/Picto.png";
import { Link, useParams } from "react-router-dom";

const Header = ({ linkCheck }) => {
  const { id } = useParams();
  return (
    <header
      className={`d-flex flex-row justify-content-between align-items-center  ${styles.headerContainer}`}
    >
      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div>
          <img src={picto} alt="picto" className={`${styles.headerPicto}`} />
        </div>
        <div>
          <img src={flex} alt="logo-flex" className={`${styles.headerFlex}`} />
        </div>
      </div>
      <nav className="d-flex flex-row justify-content-center align-items-center ">
        <Link
          to={`/AccueilPro/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.accueilChecked ? styles.linkCheked : styles.link
              }`}
            >
              Accueil
            </p>
          </div>
        </Link>
        <Link
          to={`/PageGestionPro/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.gestionChecked ? styles.linkCheked : styles.link
              }`}
            >
              Gestion
            </p>
          </div>
        </Link>
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.messageChecked ? styles.linkCheked : styles.link
            }`}
          >
            Messages
          </p>
        </div>
        <Link
          to={`/PageProfilPro/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.profilChecked ? styles.linkCheked : styles.link
              }`}
            >
              Profil
            </p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
