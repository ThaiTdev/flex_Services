import styles from "./ProfilCustomer.module.scss";
import FormCustomer from "./components/FormCustomer";
import LinkCustomer from "./components/LinkCustomer";
import { accountService } from "../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
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
        <div
          className={`d-flex justify-content-between align-items-center ml-10 `}
        >
          <div className={` mr-10 `}>
            <p className="fz-20 ml-10"> Mon profil </p>
          </div>
          <Link
            to={`/UpdateCustomerProfil/${id}`}
            style={{ textDecoration: "none" }}
            href="/"
          >
            <div className={`${styles.CustomerHomePencilBox} `}>
              <img
                className={`mr-15 ${styles.CustomerHomePencilImage}`}
                src="/images/professionnel/crayon.png"
                alt="photo_de_profil"
              />
            </div>
          </Link>
        </div>
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
