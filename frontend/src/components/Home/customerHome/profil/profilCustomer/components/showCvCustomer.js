import { accountService } from "../../../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./showCvCustomer.module.scss";

export default function CustomerCv() {
  const [data, setData] = useState("");
  const { id } = useParams();
  console.log(data);
  const handleClick = () => {
    setData(null);
  };

  useEffect(() => {
    accountService
      .showCustomerCv(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div className={`${styles.pageCv}`}>
      <div className={`${styles.boxCv} b2`}>
        <img src={data.curriculum_vitae} alt="votre_CV" />
        <Link
          to={`/ProfilCustomer/${data.user_id}`}
          style={{ textDecoration: "none" }}
          className={` fz-12 mb-10  `}
          href="/"
        >
          <span onClick={handleClick}>x</span>
        </Link>
      </div>
    </div>
  );
}
