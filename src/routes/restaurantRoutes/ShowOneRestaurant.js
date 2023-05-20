const { Restau } = require("../../db/sequelize");

module.exports = (app) => {
  app.get("/api/ShowOneRestaurant/:id/:userId", async (req, res) => {
    // récupération des données passées dans la requête
    const userData = req.params.userId;
    try {
      const resto = await Restau.findOne({
        where: { restaurant_id: userData },
      });
      if (resto) {
        const message1 = `voila les données de votre restaurant`;
        return res.json({ message: message1, data: resto });
      } else {
        // si l'utilisateur n'existe pas, je retourne un message de succès
        const message2 = `ce restaurant n'exite pas`;
        return res.json({ message2: message2 });
      }
    } catch (error) {
      const message3 = "échec de la requête. Réessayez dans quelques instants.";
      res.status(500).json({ message3, data: error });
    }
  });
};
