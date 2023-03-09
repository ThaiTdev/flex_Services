import styles from "./AccueilCustomer.module.scss";

import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AccueilCustomer() {
  const { id } = useParams();
  let navigate = useNavigate();
  function handleClick() {
    console.log(id);
    try {
      accountService
        .checkProfilValide(id, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.message);
          if (res.data.message) {
            navigate(`/ProfilPro/${id}`);
          } else {
            navigate(`/FormProfilPro/${id}`);
          }
        });
    } catch (error) {}
  }
  return (
    <div
      className={`d-flex flex-direction-row justify-content-center align-items-center  ${styles.AccueillPage} `}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center   ${styles.AccueillContainer} `}
      >
        <div
          className={`d-flex flex-row justify-content-center align-items-end ${styles.WelcomeLogo}`}
        >
          <img src="../images/logo/Logo.png" alt="logo-flex" />
        </div>
        <div
          className={`d-flex flex-column  justify-content-around   p-20 ${styles.AccueillcontainerLinks} `}
        >
          <div
            className={`d-flex flex-row justify-content-between align-items-center   ${styles.AccueiLink1} `}
          >
            <div
              onClick={handleClick}
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/utilisateur.png" alt="Maison" />
              <p className="m-0 mt-5">profil</p>
            </div>

            <div
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/filtre.png" alt="liste" />
              <p className="m-0 mt-5">Parametre</p>
            </div>
          </div>
          <div
            className={`d-flex flex-direction-row justify-content-between align-items-center  ${styles.AccueiLink2} `}
          >
            <div
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/gestionnaire.png" alt="coeur" />
              <p className="m-0 mt-5">Gestion</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <button className="  btn btn-reverse-primary ">dèconnexion</button>
        </div>
      </div>
    </div>
  );
}

export default AccueilCustomer;
