const { Pro } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.delete("/api/deleteProProfil/:id", (req, res) => {
    Pro.findByPk(req.params.id)
      .then((user) => {
        if (user === null) {
          const message =
            "l'utilisateur n'existe pas. Réessayer dans quelques instants ";
          res.status(404).json({ message });
        }
        const proDeleted = user;
        return Pro.destroy({
          where: { pro_id: user.pro_id },
        }).then((_) => {
          const message = `L'utilisateur avec l'identifiant n°${proDeleted.pro_id} a bien été supprimé.`;
          res.json({ message, data: proDeleted });
        });
      })
      .catch((error) => {
        const message =
          "l'utilisateur n'a pas pu être supprimé. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      });
  });
};
