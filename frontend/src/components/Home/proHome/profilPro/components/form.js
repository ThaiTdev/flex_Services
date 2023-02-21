import styles from "./Form.module.scss";
import AvartProfil from "./AvatarProfil";

export default function Form({ data, value }) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center  ${styles.ProForm}`}
    >
      {/* <div className={`${styles.ProAvatarBox}`}>
        <div className={`${styles.ProAvatar}`}>
          <img src="/images/professionnel/homme.png" alt="photo_de_profil" />
        </div>
        <div className={`${styles.ProPhoto}`}>
          <img src="/images/professionnel/photo.png" alt="photo_de_profil" />
        </div>
      </div> */}
      <AvartProfil element={data.avatar} />
      <div
        className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.ProInput}`}
      >
        <p>Nom</p>
        <span>{data.nom_user}</span>
      </div>
      <div
        className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.ProInput}`}
      >
        <p> Email</p>
        <span>{value.email}</span>
      </div>
      <div
        className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.ProInput}`}
      >
        <p>Téléphone</p>
        <span>+33 6 63 00 67 27</span>
      </div>
      <div
        className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.ProInput}`}
      >
        <p>Date de naissance</p>
        <span>22/08/1981</span>
      </div>
    </div>
  );
}
