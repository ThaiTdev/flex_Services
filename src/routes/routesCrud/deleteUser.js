const { User } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.delete("/api/userDelete/:id", (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        if (user === null) {
          const message =
            "l'utilisateur n'existe pas. Réessayer dans quelques instants ";
          res.status(404).json({ message });
        }
        const userDeleted = user;
        return User.destroy({
          where: { user_id: user.user_id },
        }).then((_) => {
          const message = `L'utilisateur avec l'identifiant n°${userDeleted.user_id} a bien été supprimé.`;
          res.json({ message, data: userDeleted });
        });
      })
      .catch((error) => {
        const message =
          "l'utilisateur n'a pas pu être supprimé. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      });
  });
};
