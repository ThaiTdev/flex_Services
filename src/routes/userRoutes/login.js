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
