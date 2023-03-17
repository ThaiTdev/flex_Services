import { useInputControlerFormProfilPro } from "../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import AvartarProfilCustomer from "./AvatarProfilCustomer";
import styles from "./FormProfilCustomer.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import DatePicker from "react-date-picker";

function FormProfilCustomer() {
  const [register, handleSubmit, errors] = useInputControlerFormProfilPro();
  const [element, setElement] = useState("");
  const [number, setNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();
  let imageUrl = "";

  function handleChange(num) {
    setNumber(num);
    console.log(num);
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (element.length) {
    // Extraire la chaîne de caractères encodée en base64 du tableau
    const imageData = element;
    // // Créer un objet Blob contenant les données de l'image
    const binaryData = imageData.split(",")[1];
    const mimeString = imageData.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uintArray[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: mimeString });

    // // Créer une URL d'image à partir du Blob
    imageUrl = URL.createObjectURL(blob);
  }

  const showData = (data) => {
    let value = {
      nom_user: data.userName,
      phone: number,
      birthDate: data.birthDate,
      avatar: imageUrl,
      adresse: data.adresse,
      permis: isChecked,
    };
    console.log(element);
    console.log(value);
    console.log(id);
    try {
      accountService.upload(element).then((res) => {
        console.log(element);
        console.log(res);
      });
      accountService
        .createProfilCustomer(value, id, element, {
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
        <div>
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
