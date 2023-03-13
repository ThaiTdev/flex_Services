import styles from "./ProfilCustomer.module.scss";
import FormCustomer from "./components/FormCustomer";
import LinkCustomer from "./components/LinkCustomer";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfilCustomer = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    accountService
      .showProfileCustomer(id, {
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
      className={`d-flex flex-column justify-content-between  align-items-center  ${styles.CustomerHomePage}`}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center  ${styles.CustomerHomeContainer}`}
      >
        <p className="fz-20"> Mon profil </p>
        <FormCustomer data={data} value={value} image={image} />
        <LinkCustomer />
        <div
          className={`d-flex flex-row  justify-content-center  align-items-center   ${styles.CustomerDeco}`}
        >
          <p className="fz-18">Me déconnecter</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilCustomer;
