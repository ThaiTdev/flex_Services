const { Pro } = require("../../db/sequelize");
const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/showProfilPro/:id", async (req, res) => {
    // création du code d'activation

    // récupération des données passées dans la requête
    const userData = req.params.id;

    try {
      const pro = await Pro.findOne({ where: { user_id: userData } });
      const user = await User.findOne({ where: { user_id: userData } });
      if (!pro) {
        // si il existe déjà, je retourne ce message d'erreur
        const message1 = `cette utilisateur n'existe pas`;
        return res.json({ message: message1, data: pro, value: user });
      } else {
        // si l'utilisateur n'existe pas, je retourne un message de succès
        const message2 = `Profil valide`;
        return res.json({ message2: message2, data: pro, value: user });
      }
    } catch (error) {
      const message3 =
        "Le profil n'a pas pu être créé. Réessayez dans quelques instants.";
      res.status(500).json({ message3, data: error });
    }
  });
};
