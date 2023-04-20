import styles from "./ProfilPro.module.scss";
import Form from "./components/form";
import LinkPro from "./components/LinkPro";
import { accountService } from "../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfilPro = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

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
      className={`d-flex flex-column justify-content-center align-items-center  ${styles.ProHomePage}`}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center  ${styles.ProHomeContainer}`}
      >
        <div
          className={`d-flex justify-content-between align-items-center ml-10 `}
        >
          <div className={` mr-10 `}>
            <p className="fz-20 ml-10"> Mon profil Pro</p>
          </div>
          <Link
            to={`/UpdateProProfil/${id}`}
            style={{ textDecoration: "none" }}
            href="/"
          >
            <div className={`${styles.ProHomePencilBox} `}>
              <img
                className={`mr-15 ${styles.ProHomePencilImage}`}
                src="/images/professionnel/crayon.png"
                alt="photo_de_profil"
              />
            </div>
          </Link>
        </div>
        <Form data={data} value={value} />
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
