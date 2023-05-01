import { accountService } from "../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogoutUser = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  try {
    accountService
      .logout(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/AuthForm");
      });
  } catch (error) {}

  return <div></div>;
};

export default LogoutUser;
