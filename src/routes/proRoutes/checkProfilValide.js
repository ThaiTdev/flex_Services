// const { Pro } = require("../../db/sequelize");

// module.exports = (app) => {
//   app.post("/api/checkProfilValide/:id", async (req, res) => {
//     //creation du code d'activation

//     //recupération des données passés dans la requête
//     const userData = req.params.id;

//     try {
//       await Pro.findOne({ where: { id_user: userData } }).then((user) => {
//         if (user) {
//           //si il existe déja je retourn ce message d'erreur
//           const message1 = `Vous avez déja un profil`;
//           return res.json({ message1, data: user });
//         }
//       });
//     } catch (error) {
//       const message =
//         "le profil n'a pas pu être créé. Réessayer dans quelques instants";
//       res.status(500).json({ message, data: error });
//     }
//   });
// };
const { Pro } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/checkProfilValide/:id", async (req, res) => {
    // création du code d'activation

    // récupération des données passées dans la requête
    const userData = req.params.id;

    try {
      const user = await Pro.findOne({ where: { user_id: userData } });
      if (user) {
        // si il existe déjà, je retourne ce message d'erreur
        const message1 = `Vous avez déjà un profil`;
        return res.json({ message: message1, data: user });
      } else {
        // si l'utilisateur n'existe pas, je retourne un message de succès
        const message2 = `Profil valide`;
        return res.json({ message2: message2 });
      }
    } catch (error) {
      const message =
        "Le profil n'a pas pu être créé. Réessayez dans quelques instants.";
      res.status(500).json({ message3, data: error });
    }
  });
};
