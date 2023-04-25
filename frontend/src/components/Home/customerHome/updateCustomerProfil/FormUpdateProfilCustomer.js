import { useInputControlerFormProfilCustomer } from "../../../Hooks/HookCustomer/useInputControlerFormProfilCustomer";
import { accountService } from "../../../../_services/accountService";
import { useParams } from "react-router-dom";
import styles from "./FormUpdateProfilCustomer.module.scss";
import img from "../../../../assets/images/professionnel/homme.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import FormData from "form-data";

function FormUpdateProfilCustomer() {
  const [register, handleSubmit, errors] =
    useInputControlerFormProfilCustomer();
  const [number, setNumber] = useState("");
  const [cvCheck, setCvCheck] = useState(false);
  const [routeCv, setRouteCv] = useState(null);
  const [routeAvatar, setRouteAvatar] = useState(null);
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [permis, setPermis] = useState(false);
  const [customerId, setCustomerId] = useState(0);
  const [phone, setPhone] = useState("");

  const { id } = useParams();
  let navigate = useNavigate();

  function handleChange(num) {
    setNumber(num);
  }
  const handleChangeName = (e) => {
    console.log(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setPermis(e.target.checked);
  };

  useEffect(() => {
    accountService
      .showProfileCustomer(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.value);
        setData(res.data.data);
        setUserName(res.data.data.nom_user);
        setUserAdress(res.data.data.adresse);
        setAvatar(res.data.data.avatar);
        setPermis(res.data.data.permis);
        setPhone(res.data.data.phone);
        setCustomerId(res.data.data.customer_id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChangeAvatar = (e) => {
    let formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    if (formData.get("avatar")) {
      console.log("La valeur de 'avatar' est:", formData.get("avatar"));
    } else {
      console.log("Il n'y a pas de valeur pour 'avatar'");
    }

    accountService
      .uploadAvatarCustomer(formData, id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Success ", res.data.message);
        setRouteAvatar(res.data.data);
      });
  };

  // cette fonction enregistre le cv dans le dossier uploads
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
      .uploadCvCustomer(formData, id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Success ", res.data.message);
        setRouteCv(res.data.data);
      });
  };

  // cette function enregistre le profil dans la bdd
  const showData = async (data) => {
    let value = {
      nom_user: data.userName,
      phone: number,
      birthDate: data.birthDate,
      avatar: routeAvatar,
      adresse: data.adresse,
      permis: permis,
      curriculum_vitae: routeCv,
    };

    try {
      await accountService
        .UpdateProfilCustomer(value, customerId, {
          headers: {
            "Content-Type": "application/json",
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
      <div
        className={`d-flex flex-row justify-content-center align-items-center`}
      >
        <div
          className={`d-flex flex-column justify-content-center align-items-center mb-10 ${styles.avatarContainer}`}
        >
          <div className={styles.avatarBoxImage}>
            <img
              className={styles.avatarImage}
              src={routeAvatar ? routeAvatar : avatar ? avatar : img}
              alt="photo_de_profil"
            />
          </div>

          <label
            htmlFor="avatar"
            className={`fz-12  mb-10  ${styles.label_avatar} d-flex justify-content-center align-items-center `}
          >
            <img src="/images/professionnel/photo.png" alt="photo_de_photo" />
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            className={`${styles.avatar}`}
            accept=".png,.jpeg,.jpg"
            onChange={handleChangeAvatar}
            required
          />
        </div>
      </div>
      <div>
        <h1>Je créer mon profil</h1>
      </div>
      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
      >
        <div className="d-flex flex-column justify-content-around align-items-center  ">
          <label htmlFor="userName" className="fz-12  mb-10">
            Nom de l'utilisateur
          </label>
          <input
            type="text"
            id="userName"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name="userName"
            placeholder={userName.toUpperCase()}
            // onChange={handleChangeName}
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
            placeholder={userAdress}
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
              Choisir un autre CV
            </label>
          )}
          <input
            type="file"
            name="curriculum"
            accept=".pdf,.doc,.docx,.odt,.png,.jpeg,.jpg"
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
            checked={permis}
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

export default FormUpdateProfilCustomer;
