import styles from "./NavVersionMobile.module.scss";
import Accueil from "../../../../assets/images/navbar/home.png";
import Gestion from "../../../../assets/images/navbar/gestion.png";
import Messages from "../../../../assets/images/navbar/message.png";
import Profil from "../../../../assets/images/navbar/profil.png";
import { Link, useParams } from "react-router-dom";

const NavVersionMobile = () => {
  const { id } = useParams();
  return (
    <nav className={` ${styles.navContainer}`}>
      <div
        className={` d-flex flex-row justify-content-center  ${styles.navBox}`}
      >
        <Link
          to={`/AccueilPro/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={`${styles.navLink}`}>
            <img src={Accueil} alt="Accueil" />
            <div>Accueil</div>
          </div>
        </Link>
        <div>
          <div className={` ${styles.navLink}`}>
            <img src={Gestion} alt="Gestion" />
            <div>Gestion</div>
          </div>
        </div>
        <div>
          <div className={` ${styles.navLink}`}>
            <img src={Messages} alt="Messages" />
            <div>Messages</div>
          </div>
        </div>
        <div>
          <div className={`${styles.navLink}`}>
            <img style={{ width: "20px" }} src={Profil} alt="Profil" />
            <div>Profil</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavVersionMobile;
