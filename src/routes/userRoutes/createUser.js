const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
//j'import ma méthode "sendConfirmationEmail" qui envoi un mail pour la confirmation
const { sendConfirmationEmail } = require("../../../nodeMailer.js");

module.exports = (app) => {
  app.post("/api/userCreate", async (req, res) => {
    //creation du code d'activation
    const characters =
      "0123456789abcdefijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ£$|";
    let activationCode = "";
    for (let i = 0; i < 28; i++) {
      activationCode +=
        characters[Math.floor(Math.random() * characters.length)];
    }
    //recupération des données passés dans la requête
    const userData = req.body;
    //methode pour hacher le mots de passe
    bcrypt.hash(userData.password, 10, async (err, hash) => {
      if (err) {
        res.status(500).json({
          message: "Erreur lors du hashage du mot de passe",
          data: err,
        });
      }
      //modifie les valuers de 'password' et 'activationCode' pour les enregistrés en bdd
      userData.password = hash;
      userData.activationCode = activationCode;
      try {
        await User.findOne({ where: { email: req.body.email } }).then(
          (user) => {
            if (!user) {
              //si l'utilisateur n'existe pas, je le créer.
              User.create(userData)
                //je retourne la reponse
                .then((user) => {
                  //appel de ma fonction sendConfirmationEmail pour envoyer un mail d'activation
                  sendConfirmationEmail(user.email, user.activationCode);
                  const message = `Félicitation! Veuillez verifier votre boite mail`;
                  res.json({ message, data: user });
                })
                .catch((error) => {
                  const message =
                    "l'utilisateur n'a pas pu être ajouté. Réessayer dans quelques instants";
                  res.status(500).json({ message, data: error });
                });
            } else if (!user.isActive) {
              //si il existe déja mais qu'il n'est pas activé, je retourne ce message d'erreur + un mail d'activation
              sendConfirmationEmail(user.email, user.activationCode);
              const message1 = `Cette adresse mail est déjà utilisée veuillez vérifier vos mails pour activer votre compte`;
              return res.json({ message1 });
            } else if (user) {
              //si il existe déja je retourn ce message d'erreur
              const message1 = `Cette adresse mail est déja utilisée`;
              return res.json({ message1 });
            }
          }
        );
      } catch (error) {
        const message =
          "l'utilisateur n'a pas pu être ajouté. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      }
    });
  });
};
