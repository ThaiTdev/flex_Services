const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/emailConfirm/:activationCode", (req, res) => {
    User.find({ activationCode: req.params.activationCode }).then((user) => {
      if (!user) {
        const message = "ce code d'activation est faux";
        res.json({ message, data: user });
      }
      user.isActivate = true;
      user.save();
      const message = "le compte est activer avec succes !";
      res.json({ message, data: user });
    });
  });
};
