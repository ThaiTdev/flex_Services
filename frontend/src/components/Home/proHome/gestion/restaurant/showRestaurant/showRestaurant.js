import styles from "./showRestaurant.module.scss";
import { Link, useParams } from "react-router-dom";
import restoParDefaut from "../../../../../../assets/images/professionnel/mes_restaurant/restaurantParDefaut.jpg";
import { accountService } from "../../../../../../_services/accountService";
import { useState, useEffect } from "react";

function ShowRestaurant({
  setRestoChecked,
  setPosteChecked,
  setMissionChecked,
}) {
  const [dataResto, setDataResto] = useState([]);
  const { id } = useParams();
  const [resto, setResto] = useState(true);
  const [post, setPoste] = useState(false);
  const [mission, setMission] = useState(false);

  try {
    useEffect(() => {
      accountService
        .showRestaurant(id, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setDataResto(res.data.data);
          console.log(res);
        });
    }, [id]);
  } catch (error) {}
  console.log(dataResto);

  function handleClickResto() {
    setRestoChecked(true);
    setPosteChecked(false);
    setMissionChecked(false);
    setResto(true);
    setPoste(false);
    setMission(false);
  }
  function handleClickPoste() {
    setRestoChecked(false);
    setPosteChecked(true);
    setMissionChecked(false);
    setResto(false);
    setPoste(true);
    setMission(false);
  }
  function handleClickMission() {
    setRestoChecked(false);
    setPosteChecked(false);
    setMissionChecked(true);
    setResto(false);
    setPoste(false);
    setMission(true);
  }

  return (
    <main className={`d-flex flex-column flex-fill ${styles.mainContainer} `}>
      <div
        className={`d-flex flex-column justify-content-center align-items-start  ${styles.profilContainer}`}
      >
        <div
          className={`d-flex  justify-content-start align-items-center  ${styles.domaineBoxContainer} `}
        >
          <div className={` ${styles.domaineBox}`}>
            <p
              onClick={handleClickResto}
              className={`   ${
                resto ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes restaurants
            </p>
          </div>
          <div className={` ${styles.domaineBox}`}>
            <p
              onClick={handleClickPoste}
              className={`   ${
                post ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes postes
            </p>
          </div>
          <div className={`  ${styles.domaineBox}  `}>
            <p
              onClick={handleClickMission}
              className={`   ${
                mission ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes missions
            </p>
          </div>
        </div>

        <div
          className={`d-flex flex-Wrap  justify-content-start align-items-center ${
            styles.containerBoxRestaurant
          } ${(post || mission) && styles.containerBoxRestaurantActive}  `}
        >
          <div className={`${styles.title} mb-20`}>
            <h1>Gérer mes restaurants</h1>
          </div>
          <div className={`${styles.BoxRestaurantAjouter}  `}>
            <div className={`${styles.BoxRestaurant} `}>
              <img
                className={`${styles.RestaurantImage} `}
                src={restoParDefaut}
                alt="photo_restaurant"
              />
            </div>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.boxLinkAjout}`}
            >
              <Link
                to={`/AddNewRestaurant/${id}`}
                style={{ textDecoration: "none" }}
                href="/"
              >
                <p className={`${styles.linkAjout} `}>Ajouter un restaurant</p>
              </Link>
            </div>
          </div>
          {dataResto.map((resto) => (
            <div
              key={resto.restaurant_id}
              className={`${styles.BoxRestaurant} `}
            >
              {resto.image_resto ? (
                <img
                  className={`${styles.RestaurantImage} `}
                  src={resto.image_resto}
                  alt="photo_restaurant"
                />
              ) : (
                <img
                  className={`${styles.RestaurantImage} `}
                  src={restoParDefaut}
                  alt="photo_restaurant"
                />
              )}

              <div
                className={`d-flex  justify-content-between align-items-center ${styles.boxLink}`}
              >
                <p>{resto.nom_restaurant}</p>
                <p>Editer</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.title}`}>
          <Link
            to={`/LogoutUser/${id}`}
            style={{ textDecoration: "none" }}
            href="/"
          >
            <p>Me déconnecter</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default ShowRestaurant;
