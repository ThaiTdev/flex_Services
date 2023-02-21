import { useInputControlerFormProfilPro } from "../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../_services/accountService";
import { sortPoste, sortActivite } from "./selectOptions";
import { useParams } from "react-router-dom";
import AvartProfil from "./AvatarProfil";
import styles from "./FormProfilPro.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormProfilPro() {
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilPro();
  const [element, setElement] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();

  const showData = (data) => {
    let value = {
      nom_entreprise: data.nom_entreprise,
      adresse: data.adresse,
      siret: data.siret,
      taille: data.taille,
      nom_user: data.userName,
      activite: data.selectActivite,
      fonction: data.selectFunction,
      avatar: element,
    };
    console.log(element);
    console.log(value);
    console.log(id);
    try {
      accountService
        .createProfilPro(value, id, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.message);
          navigate(`/ProfilPro/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangeActivite = (e) => {
    setValue("selectActivite", e.target.value);
    console.log(e.target.value);
  };
  const handleChangeFunction = (e) => {
    setValue("selectFunction", e.target.value);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.formContainer} `}
    >
      <div>
        <h1>Créer votre profil</h1>
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
            className="fz-12 mb-10"
            name="userName"
            {...register("userName")}
            required
          />

          <label htmlFor="userFuction" className="fz-12  mb-10">
            fonction de l'utilsateur
          </label>

          <select
            name="userFuction"
            id="userFuction"
            onChange={handleChangeFunction}
            {...register("selectFunction")}
          >
            {sortPoste.map(({ label, value }) => (
              <option key={value} value={value} required>
                {label}
              </option>
            ))}
          </select>

          <label htmlFor="companyName" className="fz-12 mb-10">
            Nom de l'entreprise
          </label>

          <input
            type="text"
            id="companyName"
            name="companyName"
            className="fz-12 mb-10 "
            {...register("nom_entreprise")}
            required
          />

          <label htmlFor="CompanyAdress" className="fz-12  mb-10">
            Adresse de l'entreprise
          </label>

          <input
            type="text"
            id="CompanyAdress"
            name="CompanyAdress"
            className="fz-12 mb-10"
            {...register("adresse")}
            required
          />

          <label htmlFor="siretNumber" className="fz-12  mb-10">
            Numero de Siret de l'entreprise
          </label>

          <input
            type="number"
            id="siretNumber"
            className="fz-12 mb-10"
            name="siretNumber"
            {...register("siret")}
            required
          />

          <label htmlFor="comagnySize" className="fz-12  mb-10">
            Taille de l'entreprise
          </label>

          <input
            type="number"
            id="comagnySize"
            className="fz-12 mb-10"
            name="comagnySize"
            {...register("taille")}
            required
          />

          <label htmlFor="comagnyActivity" className="fz-12  mb-10">
            Activité de l'entreprise
          </label>

          <select
            name="comagnyActivity"
            id="comagnyActivity"
            onChange={handleChangeActivite}
            {...register("selectActivite")}
          >
            {sortActivite.map(({ label, value }) => (
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
            <span className="mr-5">Créer mon profil</span>
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
