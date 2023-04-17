import { useInputControlerFormProfilPro } from "../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../_services/accountService";
import { sortPoste } from "./selectOptions";
import { useParams } from "react-router-dom";
import AvartProfil from "./AvatarProfil";
import styles from "./FormProfilPro.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import DatePicker from "react-date-picker";

function FormProfilPro() {
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilPro();
  const [element, setElement] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  let imageUrl = "";

  function handleChange(num) {
    setNumber(num);
    console.log(num);
  }

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
      fonction: data.selectFunction,
      avatar: imageUrl,
    };

    try {
      accountService.upload(element).then((res) => {
        console.log(element);
        console.log(res);
      });
      accountService
        .createProfilPro(value, id, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/ProfilPro/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeFunction = (e) => {
    setValue("selectFunction", e.target.value);
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
        <AvartProfil element={setElement} />
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
          <label htmlFor="userFuction" className="fz-12  mb-10">
            Fonction de l'utilsateur
          </label>
          <select
            name="userFuction"
            id="userFuction"
            onChange={handleChangeFunction}
            {...register("selectFunction")}
            className={`p-5 ${styles.inputFunction} `}
          >
            {sortPoste.map(({ label, value }) => (
              <option key={value} value={value} required>
                {label}
              </option>
            ))}
          </select>
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

export default FormProfilPro;
