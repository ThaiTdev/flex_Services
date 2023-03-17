import { useInputControlerFormProfilCustomer } from "../../../Hooks/HookCustomer/useInputControlerFormProfilCustomer";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import AvartarProfilCustomer from "./AvatarProfilCustomer";
import styles from "./FormProfilCustomer.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import axios from "axios";
import FormData from "form-data";

// import DatePicker from "react-date-picker";

function FormProfilCustomer() {
  const [register, handleSubmit, errors] =
    useInputControlerFormProfilCustomer();
  const [element, setElement] = useState("");
  const [number, setNumber] = useState("");
  const [cvCheck, setCvCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [routeImage, setRouteImage] = useState(null);

  const { id } = useParams();
  let navigate = useNavigate();

  function handleChange(num) {
    setNumber(num);
    console.log(num);
  }
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  //cette fonction enregistre le cv dans le dossier uploads
  const handleChangeCv = (e) => {
    setCvCheck(e.target.value);
    let formData = new FormData();
    formData.append("curriculum", e.target.files[0]);
    if (formData.get("curriculum")) {
      console.log("La valeur de 'curriculum' est:", formData.get("curriculum"));
    } else {
      console.log("Il n'y a pas de valeur pour 'curriculum'");
    }

    accountService
      .uploadCV(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Success ", res.data.message);
        setRouteImage(res.data.data);
      });
  };
  // cette function enregistre le profil dans la bdd
  const showData = async (data) => {
    let value = {
      nom_user: data.userName,
      phone: number,
      birthDate: data.birthDate,
      avatar: "",
      adresse: data.adresse,
      permis: isChecked,
      curriculum_vitae: routeImage,
    };

    try {
      await accountService
        .createProfilCustomer(value, id, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/ProfilCustomer/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.formContainer} `}
    >
      <div>
        <h1>Je créer mon profil</h1>
      </div>
      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
      >
        <AvartarProfilCustomer element={setElement} />
        <div className="d-flex flex-column justify-content-around align-items-center  ">
          <label htmlFor="userName" className="fz-12  mb-10">
            Nom de l'utilisateur
          </label>
          <input
            type="text"
            id="userName"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name="userName"
            {...register("userName")}
            required
          />
          <label htmlFor="userName" className="fz-12  mb-10">
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            className={`fz-12 mb-10 p-5 ${styles.adresse}`}
            name="adresse"
            {...register("adresse")}
            required
          />
          <label htmlFor="userName" className="fz-12  mb-10">
            Numéro de téléphone
          </label>
          <div className={styles.phoneBox}>
            <PhoneInput
              className={styles.phone}
              country={"fr"}
              value={number}
              onChange={handleChange}
              max-length="6"
            />
          </div>

          <label htmlFor="userName" className="fz-12  mb-10">
            Date de naissance
          </label>
          <input
            type="date"
            id="birthDate"
            className={`fz-12 mb-10 p-5 ${styles.birthDate}`}
            name="birthDate"
            {...register("birthDate")}
            required
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {cvCheck ? (
            <label
              htmlFor="curriculum"
              className={`fz-12  mb-10  ${styles.label_cvActive} d-flex justify-content-center align-items-center `}
            >
              CV validé
              <img
                className={`ml-10 ${styles.label_cvActiveValide}`}
                src="/images/professionnel/validation.png"
                alt=""
              />
            </label>
          ) : (
            <label
              htmlFor="curriculum"
              className={`fz-12  mb-10 ${styles.label_cv}   `}
            >
              Importer votre CV
            </label>
          )}
          <input
            type="file"
            name="curriculum"
            // accept=".pdf"
            id="curriculum"
            className={`fz-12 mb-10 p-5 ${styles.cv}`}
            onChange={handleChangeCv}
            required
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor="permis" className="fz-12  mb-10">
            Permis
          </label>
          <input
            type="checkbox"
            id="permis"
            className={`fz-12 mb-10 p-5 ${styles.permis}`}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-primary fz-12"
            type="submit"
          >
            <span>Valider</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>

      <div
        className={`d-flex flex-row justify-content-around  align-items-center`}
      >
        <button className={`btn btn-gog `} onClick={() => {}}>
          Google
        </button>
        <button className={`btn  btn-fb `} onClick={() => {}}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default FormProfilCustomer;
