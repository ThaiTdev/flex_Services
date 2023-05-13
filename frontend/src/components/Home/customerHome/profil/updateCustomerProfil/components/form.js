import { useInputControlerFormProfilCustomer } from "../../../../../Hooks/HookCustomer/useInputControlerFormProfilCustomer";
import { accountService } from "../../../../../../_services/accountService";
import { useParams } from "react-router-dom";
import styles from "./Form.module.scss";
import img from "../../../../../../assets/images/professionnel/homme.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import FormData from "form-data";
function Form() {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [cvCheck, setCvCheck] = useState(false);
  const [routeCv, setRouteCv] = useState(null);
  const [routeAvatar, setRouteAvatar] = useState(null);
  const [data, setData] = useState(null);
  const [userAdress, setUserAdress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [permis, setPermis] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [customerId, setCustomerId] = useState(0);
  const [newDate, setNewDate] = useState("");
  const [phone, setPhone] = useState("");

  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilCustomer();
  // useInputControlerFormProfilCustomer({
  //   userName: userName.toUpperCase(),gdtyb
  //   adresse: userAdress.toUpperCase(),
  //   birthDate: newDate,
  // });

  /////////////////////////////
  //geolocalisation //
  /////////////////////////////
  const API_key = process.env.REACT_APP_APIKEY;
  const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  /////////////////////////////
  const { id } = useParams();
  let navigate = useNavigate();

  function handleChange(num) {
    setNumber(num);
  }
  // const handleChangeName = (e) => {
  //   console.log(e.target.value);
  // };

  const handleCheckboxChange = (e) => {
    setPermis(e.target.checked);
  };

  useEffect(() => {
    /////////////////////////////
    //geolocalisation //
    ///////////////////////////
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let url = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;
    axios.get(url).then((res) => console.log(res.data));
    /////////////////////////

    accountService
      .showProfileCustomer(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
        setUserName(res.data.data.nom_user);
        setUserAdress(res.data.data.adresse);
        setAvatar(res.data.data.avatar);
        setPermis(res.data.data.permis);
        setPhone(res.data.data.phone);
        setCustomerId(res.data.data.customer_id);
        setBirthDate(res.data.data.birthDate);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [latitude, longitude, id]);

  ////////////////recuperation et modification de la date de naissance///
  // modification de birthDate pour l'affichage
  //cette syntaxe permet de faire appel à la fonction directement
  let tempo = "";
  useEffect(() => {
    (async function trasformBirthDate() {
      birthDate.split("");
      for (let i = 0; i < 10; i++) {
        tempo += birthDate[i];
      }
      setNewDate(tempo);
    })();
  }, [birthDate]);

  // cette fonction enregistre l'image dans le dossier uploads
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
        console.log("donnée:" + res.data.data);
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
        console.log("donnée2:" + res.data.data);
      });
  };

  // cette function enregistre le profil dans la bdd
  const showData = async (data) => {
    let value = {
      nom_user: data.userName,
      avatar: routeAvatar,
      phone: number,
      adresse: data.adresse,
      birthDate: data.birthDate,
      permis: permis,
      curriculum_vitae: routeCv,
      id: id,
    };

    try {
      accountService
        .UpdateProfilCustomer(value, customerId, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/PageProfilCustomer/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
    >
      <div className={`d-flex flex-row ${styles.CustomerAvatarBox} `}>
        <div className={`mb-10 ${styles.avatarContainer}`}>
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
      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
      >
        <div className="d-flex flex-column justify-content-around align-items-start  ">
          <label htmlFor="userName" className="fz-12  mb-10">
            Nom
          </label>
          <input
            type="text"
            id="userName"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name={"userName"}
            defaultValue={userName.toUpperCase()}
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
            defaultValue={userAdress.toUpperCase()}
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
            className={`d-flex justify-content-start fz-12 mb-10 p-5 ${styles.birthDate}`}
            name="birthDate"
            defaultValue={newDate}
            {...register("birthDate")}
            required
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
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
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
            type="submit"
          >
            <span>Valider</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
