const { Customer } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.put("/api/UpdateCustomerProfil/:id", (req, res) => {
    const customerId = req.params.id;
    console.log(customerId);
    Customer.update(req.body, {
      where: { customer_id: customerId },
    })
      .then((_) => {
        Customer.findByPk(customerId).then((user) => {
          if (user === null) {
            const message =
              "l'utilisateur n'existe pas. Réessayer dans quelques instants";
            res.status(404).json({ message });
          }
          const message = `L'utlisateur avec l'identifiant n° ${customerId} a bien été modifié.`;
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
