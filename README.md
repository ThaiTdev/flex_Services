
# Flex Restauration

flex-Restauration est une web app qui va permettre à des professionnels de la restauration de mettre en place des créneaux horaire selon leurs besoins en personnels.<br> 
Ainsi un potentiel postulant pourra choisir les heures de travails selon son emploi du temps qu'il soit demandeur d'emploi ou étudiant.<br>Cela permet une plus grande flexibilité.


## Techno utilisés

Pour la réalisation de ce projet j'ai utlisé en partie frontend:

* Html
* Scss
* JavaScript
* React18

Pour le backend j'ai utilisé:

* node.js
* express

La base de données sera sous PhpMyAdmin.


## Gestion des données


Pour sécuriser l'accès à la base de données j'utilise une API rest.<br>

Axios est un package de node qui va me permettre de gérer mes APIs

Ensuit je configure Axios pour les routes vers mes APIs
## Usage/Examples

```javascript
import axios from "axios";
//Je paramètre ma base url avec axios
const Axios = axios.create({ baseURL: "http://localhost:5000/api" });

export default Axios;
```



## Création des requêtes avec les méthodes

```javascript
//j'import mon parametrage Axios
import Axios from "../api/axios";

//Authentification//
let login = (data) => {
  return Axios.post("/login", data);
};
```
## j'envoie ma requête avec mes données récupérer dans mon formulaire 
```javascript
  const onSubmit = (data) => {
    console.log(data);
    try {
      accountService
        .login(data, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          // accountService.saveToken(res.data.token);
          setErrorEmail(res.data.messageEmail);
          setErrorPassWord(res.data.messagePassWord);
          console.log(res.data.data.isActive);
          if (res.data.data.isActive && res.data.data.categorie === "pro") {
            // navigate("/ProfilPro");
            navigate(`/AccueilPro/${res.data.data.user_id}`);
          } else if (
            res.data.data.isActive &&
            res.data.data.categorie === "customer"
          ) {
            // navigate("/ProfilCustomer");
            navigate("/AccueilPro");
          } else {
            setMessage(res.data.message);
            setMessageMini(res.data.messageMini);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  ```
j'envoie ma requête avec mes données récupérées dans mon formulaire à la d'un écouteur d'événement sur la balise form.



