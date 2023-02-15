const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.post("/api/resetPassword/:token", async (req, res) => {
    //recupération des données passés dans la requête
    const userData = req.body;
    try {
      if (!userData) {
        return res.status(401).json({ message: "Entrez votre mot de passe" });
      }
      const user = await User.findOne({
        where: {
          token: req.params.token,
        },
      });
      if (!user) {
        return res
          .status(404)
          .json({ messageErreur: "Utilisateur non trouvé" });
      }

      // methode pour hacher le mots de passe
      bcrypt.hash(userData.passwordReset, 10, async (err, hash) => {
        if (err) {
          res.status(500).json({
            message: "Erreur lors du hashage du mot de passe",
            data: err,
          });
          return res.json();
        }
        //modifie les valuers de 'password' pour l'enregistré en bdd
        userData.passwordReset = hash;
        password = userData.passwordReset;
        //ici comme le champs de ma table porte le même nom que ma variable 'password' je peux faire directement comme ci dessous et nom  user.update({ password: password });
        user.update({ password });
        // const message = `Votre mot de passe a bien été modifié.`;
        res.json({ messageValide: "Votre mot de passe a bien été modifié." });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        messageErreur:
          "Une erreur est survenue lors de la modification du mot de passe.",
      });
    }
  });
};
