import styles from "./Header.module.scss";
import flex from "../../../../assets/images/logoFlex/Flex.png";
import picto from "../../../../assets/images/logoFlex/Picto.png";

const Header = () => {
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
        <div className={` ${styles.boxLink}  `}>
          <a className={`link  ${styles.Accueil}  ${styles.link}`} href="/">
            Accueil
          </a>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <a className={`link  ${styles.Gestion} ${styles.link}`} href="/">
            Gestion
          </a>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <a className={`link  ${styles.Message} ${styles.link}`} href="/">
            Messages
          </a>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <a className={`link ${styles.Profil} ${styles.link}`} href="/">
            Profil
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
