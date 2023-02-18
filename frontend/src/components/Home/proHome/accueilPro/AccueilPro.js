import { styles } from "./AccueilPro.module.scss";
import { Link } from "react-router-dom";

function AccueilPro() {
  return (
    <div className="d-flex flex-direction-column justify-content-center align-items-center">
      <Link
        to="/FormProfilPro"
        style={{ textDecoration: "none" }}
        className={`fz-12  b1 p-20 mr-15`}
        href="/"
      >
        <div>profil</div>
      </Link>
      <Link
        to="/FormProfilPro"
        style={{ textDecoration: "none" }}
        className={`fz-12  b2 p-20 mr-15`}
        href="/"
      >
        <div>paramètre</div>
      </Link>
      <Link
        to="/FormProfilPro"
        style={{ textDecoration: "none" }}
        className={`fz-12 b3 p-20`}
        href="/"
      >
        <div>dèconnexion</div>
      </Link>
    </div>
  );
}

export default AccueilPro;
