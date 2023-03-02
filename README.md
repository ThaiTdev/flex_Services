

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
## Ma requête 
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
j'envoie ma requête avec mes données récupérer dans mon formulaire à la d'un écouteur d'événement sur la balise form.
## API Reference

#### Authentification

```http
  POST /api/login
```
```javascript
const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
//j'import mon package "jsonwebtoken" pour la generation de tokens
const jwt = require("jsonwebtoken");
//j'import ma "privateKey pour le deuxième paramètre JWT"
const privateKey = require("../../auth/privateKey");
//j'import ma méthode "sendConfirmationEmail" qui envoi un mail pour la confirmation
const { sendConfirmationEmail } = require("../../../nodeMailer.js");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    //je cherche dans la bdd  l'utlisateur dont le mail correspond à celui passé en requête
    await User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        //si il n'existe pas je retourne ce message d'erreur
        if (!user) {
          const messageEmail = `l'utilisateur demandé n'existe pas`;
          return res.json({ messageEmail });
        }
        //si il existe je compare son mot de passe avec celui passé en requête
        bcrypt
          .compare(req.body.password, user.password)
          .then((isPasswordValid) => {
            if (!isPasswordValid) {
              const messagePassWord = `le mot de passe est invalide`;
              return res.json({ messagePassWord });
            }

            //jwt: creation de mon token en passent trois paramètres
            const token = jwt.sign({ userId: user.user_id }, privateKey, {
              expiresIn: "24h",
            });
            if (user.isActive) {
              user.token = token;
              user.save();
              return res.json({ data: user, token });
            } else if (!user.isActive) {
              const message = `Désolé, vous devez activer votre compte`;
              const messageMini = `( Verifier votre boite mail )`;
              sendConfirmationEmail(user.email, user.activationCode);
              return res.json({ message, messageMini, data: user, token });
            }
          });
      })

      .catch((error) => {
        const message = `l'utilisateur n'a pas pu être connecté, réessayer dans quelques minutes`;
        return res.json({ message, data: error });
      });
  });
};
```

## Description

Ici j'envoie ma requête au serveur.<br>
Celle-ci demande au serveur de vérifier dans la base de données si l'utilisateur dont l'id passé dans le corps de ma requête existe et enfin le serveur envoie un code retour + des données sous format Json.<br> 
c'est ce que l'ont appels la "réponse".



