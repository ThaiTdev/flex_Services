// import { accountService } from "../../../_services/accountService";
import { useParams } from "react-router-dom";
import axios from "axios";
function ActivationAccount() {
  const { activationCode } = useParams();
  console.log(activationCode);
  axios
    .post(`http://localhost:5000/api/emailConfirm/${activationCode}`)
    .then((res) => console.log(res));

  // const navigate = useNavigate();
  // try {
  //   accountService
  //     .emailConfirm(activationCode, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "Access-Control-Allow-Origin": "http://localhost:3000",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.message);
  //       console.log(res);
  //     });
  // } catch (error) {
  //   console.error(error);

  //   // }
  // }
  return <div>Holla</div>;
}
export default ActivationAccount;
