import styles from "./showMissions.module.scss";
import { Link, useParams } from "react-router-dom";
import restoParDefaut from "../../../../../../assets/images/professionnel/mes_restaurant/restaurantParDefaut.jpg";
import { accountService } from "../../../../../../_services/accountService";
import { useState, useEffect } from "react";

function ShowAllMissions({ restoChecked, posteChecked, missionChecked }) {
  const [dataResto, setDataResto] = useState([]);
  const { id } = useParams();

  try {
    useEffect(() => {
      accountService
        .ShowAllRestaurants(id, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setDataResto(res.data.data);
        });
    }, [id]);
  } catch (error) {}

  return (
    <main className={`d-flex flex-column flex-fill ${styles.mainContainer} `}>
      <div
        className={`d-flex flex-column justify-content-center align-items-start   ${styles.profilContainer}`}
      >
        <div
          className={`d-flex  justify-content-start align-items-center  ${styles.domaineBoxContainer} `}
        >
          <div className={` ${styles.domaineBox}`}>
            <p
              className={`   ${
                restoChecked ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes restaurants
            </p>
          </div>
          <div className={` ${styles.domaineBox}`}>
            <p
              className={`   ${
                posteChecked ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes postes
            </p>
          </div>
          <div className={`  ${styles.domaineBox}  `}>
            <p
              className={`   ${
                missionChecked ? styles.domaineLinkActive : styles.domaineLink
              }  `}
            >
              Mes missions
            </p>
          </div>
        </div>

        <div
          className={`d-flex flex-Wrap  justify-content-start align-items-center ${
            styles.containerBoxRestaurant
          } ${missionChecked && styles.containerBoxRestaurantActive}  `}
        >
          <div className={`${styles.title} mb-20`}>
            <h1>Gérer mes Missions</h1>
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
                <p className={`${styles.linkAjout} `}>Gérer mes missions</p>
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
export default ShowAllMissions;
