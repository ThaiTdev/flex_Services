// import styles from "./ProfilPro.module.scss";
import Form from "./components/form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./FormUpdateProfilPro.module.scss";
import { Link, useParams } from "react-router-dom";

const UpdateProfilPro = () => {
  const { id } = useParams();
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center ${styles.ProHomePage}`}
    >
      <Header />
      <main className={`${styles.profilContainer} `}>
        <div
          className={` mr-10 d-flex flex-row justify-content-star align-items-center `}
        >
          <Link to={`/PageProfilPro/${id}`} style={{ textDecoration: "none" }}>
            <i className="fa-solid fa-arrow-left fz-20 "></i>
          </Link>
          <p className="fz-20 ml-10">Informations personnelles</p>
        </div>
        <div className={` d-flex flex-row`}>
          <Form />
          <div className={`${styles.profilText} ml-20`}>
            <p>
              Vous pouvez ici modifier tous les paramètres et toutes les
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

export default UpdateProfilPro;
