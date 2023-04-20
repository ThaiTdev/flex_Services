import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ParameterPro() {
  const { id } = useParams();
  let navigate = useNavigate();

  const handleClickDeleteProfil = () => {
    try {
      accountService
        .deleteProfilPro(id, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => console.log(res));
      navigate(`/AccueilPro/${id}`);
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={handleClickDeleteProfil}>supprimer mon profil</button>
    </div>
  );
}

export default ParameterPro;
