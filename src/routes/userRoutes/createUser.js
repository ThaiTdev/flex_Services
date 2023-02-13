const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.post("/api/userCreate", (req, res) => {
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
    bcrypt.hash(userData.password, 10, (err, hash) => {
      if (err) {
        res.status(500).json({
          message: "Erreur lors du hashage du mot de passe",
          data: err,
        });
        // return res.json();
      }
      //modifie les valuers de 'password' et 'activationCode' pour les enregistrés en bdd
      userData.password = hash;
      userData.activationCode = activationCode;

      //je vérifie  si l'email passer en requête existe  dans la bdd
      User.findOne({ where: { email: req.body.email } }).then((user) => {
        if (user) {
          //si il existe je retourn ce message d'erreur
          const message1 = `Cette adresse mail est déja utilisée`;
          return res.json({ message1 });
        } else {
          //autrement je creer mon utilisateur dans la bdd en lui passent les données en paramètre du créate
          User.create(userData)
            //je retourn la reponse
            .then((user) => {
              const message = `L'utilisateur ${req.body.email} a bien été ajouté.`;
              res.json({ message, data: user });
            })
            .catch((error) => {
              const message =
                "l'utilisateur n'a pas pu être ajouté. Réessayer dans quelques instants";
              res.status(500).json({ message, data: error });
            });
        }
      });
    });
  });
};
