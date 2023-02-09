// je fais appel a mes packages
const express = require("express");

//creer mon fichier .env pour les variables d'environnement
require("dotenv").config();

//les Middlewares
//pour afficher le retour de la requête dans le terminal
const morgan = require("morgan");
//pour le logo dans le titre
const favicon = require("serve-favicon");
//pour recupérer la requête en json
const bodyParser = require("body-parser");

//j'import sequelize
const sequelize = require("./src/db/sequelize");

//permet la connexion a la bdd
const cors = require("cors");

//je crée une instance de ma class "express"
const app = express();

//utilisation de la variable d'environement "PORT" DU FICHIER .env pour prédéfinir le port ou port 6000 si il ne le trouve pas.
const PORT = process.env.PORT || 6000;

//je passe la methode initDb a sequelize
// sequelize.initDb();

//utilisation des middleWares prédéfinis dans "express" en chaînage
app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(cors());

require("./src/routes/userRoutes/findAllUsers")(app);
require("./src/routes/userRoutes/findUserByPk")(app);
require("./src/routes/userRoutes/createUser")(app);
require("./src/routes/userRoutes/deleteUser")(app);
require("./src/routes/userRoutes/updateUser")(app);
require("./src/routes/userRoutes/login")(app);

app.listen(PORT, () => {
  console.log(`le server est ${PORT}`);
});
