// import styles from "./Form.module.scss";
import styles from "./Form.module.scss";
import { useInputControlerFormProfilPro } from "../../../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../../../_services/accountService";
import { sortPoste } from "./selectOptions";
import { useParams } from "react-router-dom";
import img from "../../../../../../assets/images/professionnel/homme.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import FormData from "form-data";
import { useEffect } from "react";

export default function Form() {
  const [number, setNumber] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [routeAvatar, setRouteAvatar] = useState(null);
  const [data, setData] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [newDate, setNewDate] = useState("");
  const [proId, setProId] = useState("");
  const [functionPro, setFunctionPro] = useState("");
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilPro();
  // useInputControlerFormProfilCustomer({
  //   userName: userName.toUpperCase(),gdtyb
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
      .showProfilePro(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        setUserName(res.data.data.nom_user);
        setAvatar(res.data.data.avatar);
        setProId(res.data.data.pro_id);
        setBirthDate(res.data.data.birthDate);
        setNumberPhone(res.data.data.phone);
        setFunctionPro(res.data.data.fonction);
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

  function handleChange(num) {
    setNumber(num);
  }
  const handleChangeAvatar = (e) => {
    let formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    if (formData.get("avatar")) {
      console.log("La valeur de 'avatar' est:", formData.get("avatar"));
    } else {
      console.log("Il n'y a pas de valeur pour 'avatar'");
    }

    accountService
      .uploadAvatarPro(formData, id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setRouteAvatar(res.data.data.data1);
      });
  };

  const showData = async (data) => {
    let value = {
      nom_user: data.userName,
      avatar: routeAvatar,
      phone: number,
      birthDate: data.birthDate,
      fonction: data.selectFunction,
      id: id,
    };

    try {
      accountService
        .UpdateProfilPro(value, proId, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          navigate(`/PageProfilPro/${id}`);
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
      className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
    >
      <div className={`d-flex flex-row ${styles.ProAvatarBox} `}>
        <div className={` mb-10 ${styles.avatarContainer}`}>
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
            name="userName"
            defaultValue={userName.toUpperCase()}
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
              value={numberPhone}
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
          <label htmlFor="userFuction" className="fz-12  mb-10">
            Mon poste / Ma fonction
          </label>
          <select
            name="userFuction"
            id="userFuction"
            onChange={handleChangeFunction}
            {...register("selectFunction")}
            className={`d-flex justify-content-start p-5 ${styles.inputFunction} `}
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
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
            type="submit"
          >
            <span>Valider</span>
            <i className={`fa-solid fa-arrow-right-long fz-20 `}></i>
          </button>
        </div>
      </form>
    </div>
  );
}
