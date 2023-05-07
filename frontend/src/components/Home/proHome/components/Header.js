import styles from "./Header.module.scss";
import flex from "../../../../assets/images/logoFlex/Flex.png";
import picto from "../../../../assets/images/logoFlex/Picto.png";
import { Link, useParams } from "react-router-dom";

const Header = ({ linkCheck }) => {
  const { id } = useParams();
  console.log(linkCheck.profilChecked);
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
            <a
              className={`link ${
                linkCheck.accueilChecked ? styles.linkCheked : styles.link
              }`}
              href="/"
            >
              Accueil
            </a>
          </div>
        </Link>
        <div className={` ${styles.boxLink}  `}>
          <a
            className={`link ${
              linkCheck.gestionChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
          >
            Gestion
          </a>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <a
            className={`link ${
              linkCheck.messageChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
          >
            Messages
          </a>
        </div>
        <Link
          to={`/PageProfilPro/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <a
              className={`link ${
                linkCheck.profilChecked ? styles.linkCheked : styles.link
              }`}
              href="/"
            >
              Profil
            </a>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
