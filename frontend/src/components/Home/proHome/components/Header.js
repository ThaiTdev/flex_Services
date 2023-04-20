import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header
      className={`d-flex flex-row justify-content-between align-items-center  ${styles.headerContainer}`}
    >
      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div>
          <img src="./images/logo/Picto.png" alt="" srcset="" />
        </div>
        <div>
          <img src="./images/logo/Flex.png" alt="" srcset="" />
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
