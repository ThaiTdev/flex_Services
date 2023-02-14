const { User } = require("../../db/sequelize");
const { sendModifPassword } = require("../../../nodeMailer.js");

module.exports = (app) => {
  app.post("/api/forgotPassword", async (req, res) => {
    const email = req.body;
    try {
      if (!email) {
        return res.status(401).json({ message: "entrer votre mail" });
      }
      await User.findOne({ where: { email: req.body.emailForgot } }).then(
        (user) => {
          console.log(user);
          if (!user) {
            const messageErreur = `Veuiller entrer un mail valide`;
            return res.json({ messageErreur });
          }
          sendModifPassword(user.email, user.token);
          const messageValide = `Félicitation! veuillez vérifier votre boite mail`;
          return res.json({ messageValide });
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};
