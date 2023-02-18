import { useInputControlerFormProfilPro } from "../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../_services/accountService";
import { sortPoste, sortActivite } from "./selectOptions";
// import { useNavigate } from "react-router-dom";

function FormProfilPro() {
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilPro();
  // let navigate = useNavigate();

  const showData = (data) => {
    let value = {
      nom_entreprise: data.nom_entreprise,
      adresse: data.adresse,
      siret: data.siret,
      taille: data.taille,
      nom_user: data.userName,
      activite: data.selectActivite,
      fonction: data.selectFunction,
    };

    console.log(value);
    try {
      accountService
        .createProfilPro(value, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.message);
          // navigate("/profilPro");
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
      className={`d-flex flex-column justify-content-around align-items-center`}
    >
      <div>
        <h1>Créer votre profil</h1>
      </div>

      <form
        className={` d-flex flex-column justify-content-between  `}
        onSubmit={handleSubmit(showData)}
      >
        <div className={`d-flex flex-column justify-content-start `}>
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

          <div>
            <label htmlFor="CompanyAdress" className="fz-12  mb-10">
              Adresse de l'entreprise
            </label>
            <div className="">
              <input
                type="text"
                id="CompanyAdress"
                name="CompanyAdress"
                className="fz-12 mb-10"
                {...register("adresse")}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="siretNumber" className="fz-12  mb-10">
              Numero de Siret de l'entreprise
            </label>
            <div>
              <input
                type="number"
                id="siretNumber"
                className="fz-12 mb-10"
                name="siretNumber"
                {...register("siret")}
                required
              />
            </div>
          </div>
          <label htmlFor="comagnySize" className="fz-12  mb-10">
            Taille de l'entreprise
          </label>
          <div>
            <input
              type="number"
              id="comagnySize"
              className="fz-12 mb-10"
              name="comagnySize"
              {...register("taille")}
              required
            />
          </div>
          <div>
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
          <label htmlFor="userName" className="fz-12  mb-10">
            Nom de l'utilisateur
          </label>
          <div>
            <input
              type="text"
              id="userName"
              className="fz-12 mb-10"
              name="userName"
              {...register("userName")}
              required
            />
            <div>
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
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-primary fz-12"
            type="submit"
          >
            <span>Créer mon profil</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>

      <div
        className={`d-flex flex-row justify-content-around  align-items-center`}
      >
        <button className={`btn  `} onClick={() => {}}>
          Google
        </button>
        <button className={`btn   `} onClick={() => {}}>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default FormProfilPro;
