import Form from "./components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./FormProfilCustomer.module.scss";
import { Link, useParams } from "react-router-dom";
const FormProfilCustomer = () => {
  const { id } = useParams();
  const linkCheck = {
    profilChecked: true,
    accueilChecked: false,
    gestionChecked: false,
    messageChecked: false,
  };
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center ${styles.CustomerHomePage}`}
    >
      <Header linkCheck={linkCheck} />
      <main className={`${styles.profilContainer} `}>
        <div
          className={`${styles.profilTitle}  d-flex flex-row justify-content-star align-items-center `}
        >
          <Link
            to={`/AccueilCustomer/${id}`}
            style={{ textDecoration: "none" }}
          >
            <i className={`fa-solid fa-arrow-left fz-20 `}></i>
          </Link>
          <p className="fz-20 ml-10 ">Je créer mon profil</p>
        </div>
        <div className={` d-flex flex-row ${styles.boxProfilText} `}>
          <Form />
          <div className={`${styles.profilText} ml-20`}>
            <p>
              Vous pouvez ici ajouter tous les paramètres et toutes les
              informations liées à votre compte.<br></br>
              <br></br>
              <br></br>
              Nous prenons vos données et vos informations numériques à coeur,
              c’est pouquoi vous pouvez tout désactiver si vous le souhaitez. Ou
              nous aider à faire de flex la meilleure plateforme pour vous,
              utilisateurs, en partageant vos données que nous n’utiliserons
              jamais en dehors de notre plateforme
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormProfilCustomer;
