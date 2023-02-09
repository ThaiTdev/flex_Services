const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.post("/api/userCreate", (req, res) => {
    const userData = req.body;
    bcrypt.hash(userData.password, 10, (err, hash) => {
      if (err) {
        res.status(500).json({
          message: "Erreur lors du hashage du mot de passe",
          data: err,
        });
        // return res.json();
      }
      userData.password = hash;
      User.findOne({ where: { email: req.body.email } }).then((user) => {
        if (user) {
          const message1 = `Cette adresse mail est déja utilisée`;
          return res.json({ message1 });
        } else {
          User.create(userData)
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
