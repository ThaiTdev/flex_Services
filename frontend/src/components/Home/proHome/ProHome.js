import styles from "./ProHome.module.scss";

const ProHome = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.proHomePage}`}
    >
      <h1>Bienvenu sur votre espace Professionnel !</h1>
    </div>
  );
};
export default ProHome;
