import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import NavVersionMobile from "../../../components/NavVersionMobile";
import Footer from "../../../components/Footer";
import { accountService } from "../../../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
import styles from "./ShowOneRestaurant.module.scss";

function ShowOneRestaurant() {
  const { id, idResto } = useParams();
  const [adress, setAdress] = useState("");
  const [imageResto, setImageResto] = useState("");
  const [nomResto, setNomResto] = useState("");
  const [phonResto, setPhoneResto] = useState("");
  const [siretResto, setSiretResto] = useState("");

  const newArr = [];

  const linkCheck = {
    profilChecked: false,
    accueilChecked: false,
    gestionChecked: true,
    messageChecked: false,
  };
  let resp = "";
  try {
    useEffect(() => {
      accountService
        .ShowOneRestaurant(id, idResto, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setAdress(res.data.data.adresse);
          setImageResto(res.data.data.image_resto);
          setNomResto(res.data.data.nom_restaurant);
          setPhoneResto(res.data.data.phone);
          setSiretResto(res.data.data.siret);
        });
    }, [id, idResto]);
  } catch (error) {
    console.log(error);
  }

  (async function Phone(size) {
    if (phonResto) {
      let arr = phonResto.split("");
      newArr[0] = arr.slice(0, 2);
      newArr[1] = arr.slice(2, 3);
      for (let i = 2; i <= arr.length; i++) {
        newArr[i] = arr.splice(i, size);
        resp = newArr.join(" ").replace(/,/g, "");
      }
    }
  })(2);

  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center  ${styles.ProHomePage}`}
    >
      <Header linkCheck={linkCheck} userId={idResto} />
      <main
        className={`${styles.profilContainer} d-flex justify-content-star align-items-start  `}
      >
        <div
          className={`${styles.profilTitle} mr-10 d-flex flex-column justify-content-star align-items-start  `}
        >
          <div
            className={`d-flex flex-row justify-content-star align-items-center `}
          >
            <Link
              to={`/PageGestionPro/${id}`}
              style={{ textDecoration: "none" }}
            >
              <i
                className={`fa-solid fa-arrow-left fz-20  ${styles.ProArrow}`}
              ></i>
            </Link>
            <p className="fz-20 ml-10">{nomResto.toUpperCase()}</p>
          </div>
          <div
            className={`d-flex flex-row mb-20 ${styles.imageRestoContainer} `}
          >
            <img
              className={styles.imageRestoImage}
              src={imageResto}
              alt={nomResto}
            />
          </div>
          <h4 className={`mt-10`}>Adresse:</h4>
          <p>{adress}</p>
          <h4>Téléphone:</h4>
          <p>+{resp}</p>
          <h4>Siret:</h4>
          <p>{siretResto}</p>
        </div>

        <div
          className={`${styles.profilText} d-flex flex-column justify-content-between align-items-center ml-20`}
        >
          <div>
            <p>
              Vous pouvez ici modifier tous les paramètres et toutes les
              informations liées à votre restaurant.<br></br>
              <br></br>
              <br></br>
              Nous prenons vos données et vos informations numériques à coeur,
              c’est pouquoi vous pouvez tout désactiver si vous le souhaitez. Ou
              nous aider à faire de flex la meilleure plateforme pour vous,
              utilisateurs, en partageant vos données que nous n’utiliserons
              jamais en dehors de notre plateforme
            </p>
          </div>
          <div className="mt-10 fz-12">
            <Link
              to={`/updateRestaurant/${id}/${idResto}`}
              style={{ textDecoration: "none" }}
            >
              <button
                className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
                type="submit"
              >
                <span>Modifier</span>
                <i className={`fa-solid fa-arrow-right-long fz-20 `}></i>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <NavVersionMobile linkCheck={linkCheck} />
      <Footer />
    </div>
  );
}

export default ShowOneRestaurant;
