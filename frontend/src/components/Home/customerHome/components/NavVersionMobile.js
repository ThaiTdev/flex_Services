import styles from "./NavVersionMobile.module.scss";
import Accueil from "../../../../assets/images/navbar/home.png";
import Gestion from "../../../../assets/images/navbar/gestion.png";
import Messages from "../../../../assets/images/navbar/message.png";
import Profil from "../../../../assets/images/navbar/profil.png";
import AccueilCheck from "../../../../assets/images/navbar/homeCheck.png";
import GestionCheck from "../../../../assets/images/navbar/gestionCheck.png";
import MessagesCheck from "../../../../assets/images/navbar/messageCheck.png";
import ProfilCheck from "../../../../assets/images/navbar/profilCheck.png";
import { Link, useParams } from "react-router-dom";

const NavVersionMobile = ({ linkCheck }) => {
  const { id } = useParams();
  return (
    <nav className={` ${styles.navContainer}`}>
      <div
        className={` d-flex flex-row justify-content-between  ${styles.navBox}`}
      >
        <Link
          to={`/AccueilCustomer/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={`${styles.navLink}`}>
            <img
              src={linkCheck.accueilChecked ? AccueilCheck : Accueil}
              alt="Accueil"
            />
            <div className={` ${styles.navText}`}>Accueil</div>
          </div>
        </Link>
        <div>
          <div className={` ${styles.navLink}`}>
            <img
              src={linkCheck.gestionChecked ? GestionCheck : Gestion}
              alt="Gestion"
            />
            <div className={` ${styles.navText}`}>Gestion</div>
          </div>
        </div>
        <div>
          <div className={` ${styles.navLink}`}>
            <img
              src={linkCheck.messageChecked ? MessagesCheck : Messages}
              alt="Messages"
            />
            <div className={` ${styles.navText}`}>Messages</div>
          </div>
        </div>
        <Link
          to={`/pageProfilCustomer/${id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div>
            <div className={`${styles.navLink}`}>
              <img
                style={{ width: "16px" }}
                src={linkCheck.profilChecked ? ProfilCheck : Profil}
                alt="Profil"
              />
              <div className={` ${styles.navText}`}>Profil</div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default NavVersionMobile;
