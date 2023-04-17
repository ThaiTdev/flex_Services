import styles from "./FormCustomer.module.scss";

export default function FormCustomer({ data, value }) {
  const newBirth = data.birthDate;
  const avatar = data.avatar;

  // modification de birthDate pour l'affichage
  let newDate = "";
  async function birthDate() {
    let birth = [];
    newBirth.split("");
    for (let i = 0; i < 10; i++) {
      birth.push(newBirth[i]);
    }
    newDate = birth.join("").split("-").reverse().toString().replace(/,/g, "/");
  }
  birthDate();

  // modification de phone pour l'affichage
  const newPhone = data.phone;
  const newArr = [];
  let resp = "";
  async function Phone(size) {
    let arr = newPhone.split("");
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
      resp = newArr.join(" ").replace(/,/g, "");
    }
  }
  Phone(2);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center  ${styles.CustomerForm}`}
    >
      <div className={`${styles.CustomerAvatarBox}`}>
        <div className={`${styles.CustomerAvatar}`}>
          <img
            className={`${styles.CustomerImage}`}
            src={avatar ? avatar : "/images/professionnel/homme.png"}
            alt="photo_de_profil"
          />
        </div>
      </div>

      <div
        className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.CustomerInput}`}
      >
        <p>Nom</p>
        <span>{data.nom_user}</span>
      </div>
      <div
        className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.CustomerInput}`}
      >
        <p> Email</p>
        <span>{value.email}</span>
      </div>
      <div
        className={`d-flex flex-row   justify-content-between  align-items-center  ${styles.CustomerInput}`}
      >
        <p>Téléphone</p>
        <span>+{resp}</span>
      </div>
      <div
        className={`d-flex flex-row  justify-content-between  align-items-center  ${styles.CustomerInput}`}
      >
        <p>Date de naissance</p>
        <span>{newDate}</span>
      </div>
    </div>
  );
}
