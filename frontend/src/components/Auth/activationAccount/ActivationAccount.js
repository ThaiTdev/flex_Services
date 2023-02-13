import { accountService } from "../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ActivationAccount.module.scss";

function ActivationAccount() {
  const { activationCode } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    console.log(activationCode);
    try {
      accountService
        .emailConfirm(activationCode, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res.data.message);
          if (res) {
            navigate("/AuthForm");
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.validationPage}`}
    >
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img src="../../../images/Finish_line.gif" alt="Finish_line" />
      </div>
      <h1>Felicitation !</h1>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <button className="btn  btn-co btn-primary" onClick={handleClick}>
          Allons-y!
        </button>
      </div>
    </div>
  );
}
export default ActivationAccount;
// J7HxDJnWjcjTJ£QNOpElncd$OCjd
