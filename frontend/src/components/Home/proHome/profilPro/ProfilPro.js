import styles from "./ProfilPro.module.scss";
import Form from "./components/form";
import LinkPro from "./components/LinkPro";

const ProfilPro = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-between  align-items-center  ${styles.ProHomePage}`}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center  ${styles.ProHomeContainer}`}
      >
        <p className="fz-20"> Mon profil</p>
        <Form />
        <LinkPro />
        <div
          className={`d-flex flex-row  justify-content-center  align-items-center   ${styles.ProDeco}`}
        >
          <p className="fz-18">Me déconnecter</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilPro;
