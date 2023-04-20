import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PageProfilPro.module.scss";

const PageProfilPro = () => {
  return (
    <div className={`d-flex flex-column   ${styles.mainPage}`}>
      <Header />
      <main className={`d-flex flex-fill  ${styles.mainContainer}`}>
        <div
          className={`d-flex flex-column justify-content-center align-items-center   ${styles.profilContainer}`}
        >
          <div className={`${styles.title} mb-20`}>
            <h1>Mon profil</h1>
          </div>
          <div
            className={`d-flex flex-row justify-content-between align-items-center  ${styles.menu} `}
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center  ${styles.menuOption} `}
            >
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <img src="./images/monProfil/profil.png" alt="profil" />
                  <p>Modifier mon profil</p>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <img
                    src="./images/monProfil/identification.png"
                    alt="carte-identité"
                  />
                  <p>Informations Personnelles</p>
                </div>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center    ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <img
                    src="./images/monProfil/facture.png"
                    alt="carte-identité"
                  />
                  <p>Factures et reçus</p>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <img
                    src="./images/monProfil/credit-card.png"
                    alt="carte-de-credit"
                  />
                  <p>Moyens de paiement</p>
                </div>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <img
                    src="./images/monProfil/notifications.png"
                    alt="carte-de-credit"
                  />
                  <p>Réglages des notifications</p>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <img
                    src="./images/monProfil/preference.png"
                    alt="carte-de-credit"
                  />
                  <p>préférences</p>
                </div>
              </div>
            </div>
            <div
              className={`d-flex justify-content-center justify-content-center  ${styles.menuText} `}
            >
              <p>
                Vous pouvez ici modifier tous les paramètres et toutes les
                informations léies à votre compte. Nous prenons vos données et
                vos informations numériques à coeur, c’est pouquoi vous pouvez
                tout désactiver si vous le souhaitez. Ou nous aider à faire de
                flex la meilleure plateforme pour vous, utilisateurs, en
                partageant vos données que nous n’utiliserons jamais en dehors
                de notre plateforme.
              </p>
            </div>
          </div>
          <div className={`${styles.title}`}>
            <p>Me déconnecter</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageProfilPro;
