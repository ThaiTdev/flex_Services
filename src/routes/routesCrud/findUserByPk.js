const { User } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.get("/api/user/:id", (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        const message = "Un user a bien été trouvé.";
        res.json({ message, data: user });
      })
      .catch((error) => {
        const message =
          "l'utilisateurs n'a pas pu être récuprée. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      });
  });
};
