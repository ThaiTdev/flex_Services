const { User } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.put("/api/userUpdate/:id", (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { user_id: id },
    })
      .then((_) => {
        User.findByPk(id).then((user) => {
          if (user === null) {
            const message =
              "l'utilisateur n'existe pas. Réessayer dans quelques instants";
            res.status(404).json({ message });
          }
          const message = `L'utlisateur avec l'identifiant n° ${user.user_id} a bien été modifié.`;
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
