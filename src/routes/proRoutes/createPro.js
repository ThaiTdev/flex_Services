const { Pro } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/createProfilPro", async (req, res) => {
    //creation du code d'activation

    //recupération des données passés dans la requête
    const userData = req.body;

    try {
      await Pro.findOne({ where: { siret: req.body.siret } }).then((user) => {
        if (user) {
          //si il existe déja je retourn ce message d'erreur
          const message1 = `Cette utilisateur à déja un profil`;
          return res.json({ message1 });
        }

        //si l'utilisateur n'existe pas, je le créer.
        Pro.create(userData)
          //je retourne la reponse
          .then((user) => {
            const message = `le profil à bien été créé`;
            res.json({ message, data: user });
          })
          .catch((error) => {
            const message =
              "le profil n'a pas pu être créé. Réessayer dans quelques instants";
            res.status(500).json({ message, data: error });
          });
      });
    } catch (error) {
      const message =
        "le profil n'a pas pu être créé. Réessayer dans quelques instants";
      res.status(500).json({ message, data: error });
    }
  });
};
