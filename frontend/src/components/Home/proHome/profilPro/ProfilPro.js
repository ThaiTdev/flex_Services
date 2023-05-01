import styles from "./ProfilPro.module.scss";
import Form from "./components/form";
import { accountService } from "../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilPro = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    accountService
      .showProfilePro(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        console.log(res.data.value);
        setValue(res.data.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center  ${styles.ProHomePage}`}
    >
      <Header />
      <main className={`${styles.profilContainer}`}>
        <div
          className={` mr-10 d-flex flex-row justify-content-star align-items-center `}
        >
          <Link to={`/PageProfilPro/${id}`} style={{ textDecoration: "none" }}>
            <i className="fa-solid fa-arrow-left fz-20 "></i>
          </Link>
          <p className="fz-20 ml-10">Mon Profil</p>
        </div>
        <div className={` d-flex flex-row`}>
          <Form data={data} value={value} />
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

export default ProfilPro;
