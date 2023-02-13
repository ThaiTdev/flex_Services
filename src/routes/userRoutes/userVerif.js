const { User } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/emailConfirm/:activationCode", (req, res) => {
    User.findOne({ activationCode: req.params.activationCode }).then((user) => {
      if (!user) {
        const message = "ce code d'activation est faux";
        res.json({ message, data: user });
        console.log(req.params.activationCode);
      }
      console.log(req.params.activationCode);
      console.log(req.body.token);
      user.isActive = true;
      user.save();
      const message = "Votre compte est activer avec succes !";
      res.json({ message, data: user });
    });
  });
};
