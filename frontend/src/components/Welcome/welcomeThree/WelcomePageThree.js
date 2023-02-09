import styles from "./WelcomePageThree.module.scss";

function WelcomePageThree() {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.WelcomeThree}`}
    >
      <div className={`${styles.WelcomeTextBox}`}>
        <h1>
          Vous êtes <br />
          restaurateur ?
        </h1>
        <p>
          Créez des créneaux de travail pour combler vos manques d’effectifs.
        </p>
        <p>
          Besoin de renfort les weekends ? Ou le mercredi ? Pas de problème.
          Programmez en avance vos besoins en cuisine, service, barista,
          bartender, etc.
        </p>
        <p>
          Envie de tester une nouvelle offre ? Mettre en place une carte de
          cocktails ? Demandez de l’aide à de vrais experts qui viendront vous
          apporter du renfort.
        </p>
      </div>
    </div>
  );
}

export default WelcomePageThree;
