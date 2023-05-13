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
          <img src={picto} alt="picto" />
        </div>
        <div>
          <img src={flex} alt="logo-flex" />
        </div>
      </div>
      <nav className="d-flex flex-row justify-content-center align-items-center ">
        <Link
          to={`/AccueilCustomer/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.accueilChecked ? styles.linkCheked : styles.link
              }`}
              href="/"
            >
              Accueil
            </p>
          </div>
        </Link>
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.gestionChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
          >
            Gestion
          </p>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.messageChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
          >
            Messages
          </p>
        </div>
        <Link
          to={`/PageProfilCustomer/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.profilChecked ? styles.linkCheked : styles.link
              }`}
              href="/"
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
