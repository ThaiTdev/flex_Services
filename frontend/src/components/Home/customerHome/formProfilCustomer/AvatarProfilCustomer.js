import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Avatar from "react-avatar-edit";
import img from "../../../../assets/images/professionnel/homme.png";
import styles from "./AvatarProfilCustomer.module.scss";
import "primeicons/primeicons.css";

function AvartarProfilCustomer({ element }) {
  const [imageCrop, setImageCrop] = useState(false);
  const [image, setImage] = useState("");
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pView, setPview] = useState(false);

  const profileFinal = profile.map((item) => item.pView);

  //ici je récupère  le dernière élément de mon tableau d'image stocké
  let result = "";
  function goodProfil() {
    for (let index = 0; index < profileFinal.length; index++) {
      result = profileFinal[index];
      element(result);
    }
  }

  const onClose = () => {
    setPview(null);
  };
  const onCrop = (view) => {
    setPview(view);
  };

  goodProfil();

  const handleSaveCropImage = () => {
    setProfile([...profile, { pView }]);
    setImageCrop(false);
  };
  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center`}
    >
      <div
        className={`d-flex flex-row justify-content-center align-items-center mb-10 ${styles.avatarContainer}`}
      >
        <img
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
          src={profileFinal.length ? result : img}
          alt="photo_de_profil"
        />
        <div className={`${styles.ProPhoto}`}>
          <img
            onClick={() => setImageCrop(true)}
            src="/images/professionnel/photo.png"
            alt="photo_de_photo"
          />
        </div>
      </div>

      <Dialog
        className={`d-flex flex-column justify-content-center align-items-center  ${styles.avatarCheckContainer}`}
        visible={imageCrop}
        header="Cancel"
        style={{ width: "100vw", color: "white", display: "flex", flex: "row" }}
        onHide={() => setImageCrop(false)}
      >
        <div
          className={`d-flex flex-column justify-content-around align-items-center ${styles.avatarCheckbox}`}
        >
          <div>
            <Avatar
              width={250}
              height={250}
              onClose={onClose}
              onCrop={onCrop}
              src={src}
              shadingColor={"#474649"}
            />
          </div>
          <div>
            <Button
              className={`btn btn-reverse-primary mt-20 ${styles.savaButton}`}
              onClick={handleSaveCropImage}
              label="save"
            />
          </div>
        </div>
      </Dialog>
      <InputText
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => {
          console.log(e);
          const file = e.target.files[0];
          if (file && file.type.substring(0, 5) === "image") {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      />
    </div>
  );
}

export default AvartarProfilCustomer;
