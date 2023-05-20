const { Restau } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/GetDataForOneRestaurant/:id/:userId", async (req, res) => {
    // récupération des données passées dans la requête
    const userId = req.params.id;
    const restoId = req.params.userId;

    try {
      const resto = await Restau.findOne({ where: { restaurant_id: restoId } });
      if (!resto) {
        // si il n'existe pas, je retourne ce message d'erreur
        const message1 = `cette utilisateur n'existe pas`;
        return res.json({ message: message1, data: resto });
      } else {
        // si l'utilisateur existe déjà je retourne un message de succès
        const message2 = `Profil valide`;
        return res.json({ message2: message2, data: resto });
      }
    } catch (error) {
      const message3 =
        "Le profil n'a pas pu être créé. Réessayez dans quelques instants.";
      res.status(500).json({ message3, data: error });
    }
  });
};
