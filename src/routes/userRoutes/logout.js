const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.put("/api/logoutUser/:id", async (req, res) => {
    const id = req.params.id;
    User.update(
      // { token: req.body.token, logger: false },
      { token: null, logger: false },
      {
        where: { user_id: id },
      }
    ).then((_) => {
      User.findByPk(id).then((user) => {
        if (user === null) {
          const message =
            "l'utilisateur n'existe pas. Réessayer dans quelques instants";
          res.status(404).json({ message });
        }
        const message = `L'utlisateur avec l'identifiant n° ${user.user_id} a bien été modifié et déconnecté.`;
        res.json({ message, data: user });
      });
    });
  });
};
