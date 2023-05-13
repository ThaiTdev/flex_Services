import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavVersionMobile from "../../components/NavVersionMobile";
import ShowRestaurant from "../restaurant/showRestaurant/showRestaurant";
import ShowPostes from "../postes/showPostes/showPostes";
import ShowMissions from "../missions/showMissions/showMissions";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./PageGestionPro.module.scss";

function PageGestion() {
  const [restoChecked, setRestoChecked] = useState(true);
  const [posteChecked, setPosteChecked] = useState(false);
  const [missionChecked, setMissionChecked] = useState(false);
  // const { id } = useParams();
  const linkCheck = {
    profilChecked: false,
    accueilChecked: false,
    gestionChecked: true,
    messageChecked: false,
  };
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-start ${styles.mainPage}`}
    >
      <Header linkCheck={linkCheck} />
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${styles.mainContainer}`}
      >
        <ShowRestaurant
          setRestoChecked={setRestoChecked}
          setPosteChecked={setPosteChecked}
          setMissionChecked={setMissionChecked}
        />
        <ShowPostes
          restoChecked={restoChecked}
          posteChecked={posteChecked}
          missionChecked={missionChecked}
        />
        <ShowMissions
          restoChecked={restoChecked}
          posteChecked={posteChecked}
          missionChecked={missionChecked}
        />
      </div>
      <NavVersionMobile linkCheck={linkCheck} />
      <Footer />
    </div>
  );
}

export default PageGestion;
