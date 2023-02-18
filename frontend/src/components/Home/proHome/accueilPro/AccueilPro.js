import { styles } from "./AccueilPro.module.scss";
import { Link } from "react-router-dom";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AccueilPro() {
  const { id } = useParams();
  let navigate = useNavigate();
  function handleClick() {
    console.log(id);
    try {
      accountService
        .checkProfilValide(id, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.message);
          if (res.data.message) {
            navigate("/ProfilPro");
          } else {
            navigate(`/FormProfilPro/${id}`);
          }
        });
    } catch (error) {}
  }
  return (
    <div className="d-flex flex-direction-column justify-content-center align-items-center">
      <button onClick={handleClick}>profil</button>
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
