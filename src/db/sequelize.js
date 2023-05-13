//j'import sequelize et Datatype de sequelize
const { Sequelize, DataTypes } = require("sequelize");
//j'import le model User
const UserModel = require("../models/users/user");
//j'import le modelProfessionnel
const ProModel = require("../models/professionnels/professionnel");
const RestaurantModel = require("../models/professionnels/restaurant");
//j'import le ùodelCustomer
const CustomerModel = require("../models/customers/customers");

//j'import les données en dure
// const users = require("./mock-user");
// const pros = require("./mock-pro");
// const restos = require("./mock-restau");
// const customer = require("./mock-customer");

//je crée une instance de sequelise pour me connecter à ma base de données
const sequelize = new Sequelize("dbflex", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

//j'instancie le model User et lui passe les methode sequelise et Datatype
const User = UserModel(sequelize, DataTypes);
const Pro = ProModel(sequelize, DataTypes);
const Restau = RestaurantModel(sequelize, DataTypes);
const Customer = CustomerModel(sequelize, DataTypes);

//generation de users au chargement
// je synchronise toutes mes tables et les créer dans la base de données
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     restau.map((restau) => {
//       User.create({
//         nom_entreprise: restau.nom_entreprise,
//         adresse: restau.adresse,
//         siret: restau.siret,
//         taille: restau.taille,
//       }).then((restau) => console.log(restau.toJSON()));
//     });
//     console.log("La base de donnée a bien été initialisée !");
//   });
// };
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     customer.map((customer) => {
//       User.create({
//         nom_entreprise: customer.nom_entreprise,
//         adresse: customer.adresse,
//         phone: customer.phone,
//         taille: customer.taille,
//         adresse: customer.adresse,
//       }).then((customer) => console.log(customer.toJSON()));
//     });
//     console.log("La base de donnée a bien été initialisée !");
//   });
// };
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     pros.map((pro) => {
//       User.create({
//         nom_entreprise: pro.nom_entreprise,
//         adresse: pro.adresse,
//         birthDate: pro.birthDate,
//         siret: pro.siret,
//         taille: pro.taille,
//         nom_user: pro.userName,
//         fonction: pro.selectFunction,
//       }).then((pro) => console.log(pro.toJSON()));
//     });
//     console.log("La base de donnée a bien été initialisée !");
//   });
// };
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
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     restos.map((resto) => {
//       User.create({
//         nom_restaurant: resto.nom_restaurant,
//         number: resto.number,
//         phone: resto.phone,
//         adresse: resto.adresse,
//         siret: resto.siret,
//       }).then((resto) => console.log(resto.toJSON()));
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
  Pro,
  Restau,
  Customer,
};
