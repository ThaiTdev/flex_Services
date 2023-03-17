import styles from "./ProfilPro.module.scss";
import Form from "./components/form";
import LinkPro from "./components/LinkPro";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfilPro = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    accountService
      .showProfilePro(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
        setValue(res.data.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div
      className={`d-flex flex-column justify-content-between  align-items-center  ${styles.ProHomePage}`}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center  ${styles.ProHomeContainer}`}
      >
        <div>
          <p className="fz-20"> Mon profil </p>
        </div>
        <Form data={data} value={value} image={image} />
        <LinkPro />
        <div
          className={`d-flex flex-row  justify-content-center  align-items-center   ${styles.ProDeco}`}
        >
          <p className="fz-18">Me déconnecter</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilPro;
