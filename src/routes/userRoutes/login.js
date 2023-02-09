const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = require("../../auth/privateKey");

module.exports = (app) => {
  app.post("/api/login", (req, res) => {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          const message = `l'utilisateur demandé n'existe pas`;
          return res.status(404).json({ message });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((isPasswordValid) => {
            if (!isPasswordValid) {
              const message = `le mot de pas est invalide`;
              return res.status(401).json({ message });
            }
            //jwt
            const token = jwt.sign({ userId: user.user_id }, privateKey, {
              expiresIn: "24h",
            });

            const message = `L'utilisateur a été connecté avec succès`;
            return res.json({ message, data: user, token });
          });
      })

      .catch((error) => {
        const message = `l'utilisateur n'a pas pu être connecté, réessayer dans quelques minutes`;
        return res.status(500).json({ message, data: error });
      });
  });
};
