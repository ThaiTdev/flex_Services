import styles from "./WelcomePageTwo.module.scss";
// import { useScrollPage } from "../../Hooks/useScrollPage";

function WelcomePageTwo() {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.WelcomeTwo}`}
    >
      <div className={`${styles.WelcomeTextBox}`}>
        <h1>
          Notre <br />
          mission
        </h1>
        <p>
          La mission de Flex est simple.Notre but est de déconstruire le secteur
          de la restauration en proposant des emplois flexibles. Nous croyons en
          une économie moins stricte, où tout le monde peut travailler selon son
          rythme.
        </p>
      </div>
    </div>
  );
}

export default WelcomePageTwo;
