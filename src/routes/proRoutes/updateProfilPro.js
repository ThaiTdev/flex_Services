const { Pro } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.put("/api/UpdateProProfil/:id", (req, res) => {
    const proId = req.params.id;
    console.log(proId);
    Pro.update(req.body, {
      where: { pro_id: proId },
    })
      .then((_) => {
        Pro.findByPk(proId).then((user) => {
          if (user === null) {
            const message =
              "l'utilisateur n'existe pas. Réessayer dans quelques instants";
            res.status(404).json({ message });
          }
          const message = `L'utlisateur avec l'identifiant n° ${proId} a bien été modifié.`;
          res.json({ message, data: user });
        });
      })
      .catch((error) => {
        const message =
          "l'utilisateur n'a pas pu être modifié. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      });
  });
};
