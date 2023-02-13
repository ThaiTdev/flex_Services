import styles from "./CustomerHome.module.scss";

const CustomerHome = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.CustomerHomePage}`}
    >
      <h1>Bienvenu sur votre espace employé</h1>
    </div>
  );
};
export default CustomerHome;
