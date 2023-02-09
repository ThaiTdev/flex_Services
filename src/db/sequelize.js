//j'import sequelize
const { Sequelize, DataTypes } = require("sequelize");
//j'import le model User
const UserModel = require("../models/users/user");
//j'import les données en dure
// const users = require("./mock-user");

//je crée une instance de sequelise pour me connecter à ma base de données
const sequelize = new Sequelize("dbflex", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

//j'instancie le model User
const User = UserModel(sequelize, DataTypes);

//generation de users au chargement
//je synchronise toutes mes tables et les créer dans la base de données
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     users.map((user) => {
//       User.create({
//         phone: user.phone,
//         type_of: user.type_of,
//         email: user.email,
//         password: user.password,
//         categorie: user.categorie,
//       }).then((user) => console.log(user.toJSON()));
//     });
//     console.log("La base de donnée a bien été initialisée !");
//   });
// };

//je test ma connexion à la bdd
sequelize
  .authenticate()
  .then((_) =>
    console.log("la connexion  à la base de données a bien été établie.")
  )
  .catch((error) =>
    console.error("Impossible de se connecter à la base de données")
  );

module.exports = {
  // initDb,
  User,
};
