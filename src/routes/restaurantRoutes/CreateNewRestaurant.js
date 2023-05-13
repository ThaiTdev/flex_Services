const { Restau } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/createNewResto/:id", async (req, res) => {
    //recupération des données passés dans la requête
    const userData = req.body;
    const paramId = req.params.id;
    console.log(paramId);
    console.log(userData);

    try {
      userData.user_id = paramId;
      console.log(userData);
      Restau.create(userData)
        //je retourne la reponse
        .then((user) => {
          const message = `le restaurant à bien été créé`;
          res.json({ message, data: user });
        })
        .catch((error) => {
          const message =
            "le profil n'a pas pu être créé. Réessayer dans quelques instants";
          res.status(500).json({ message, data: error });
        });
    } catch (err) {}
  });
};

//supression des images en trop et enregistrement de l'image dans son dossier
// const folderInitial = "uploadPictureResto" + "_" + paramId;
// const folderUplodedInitial =
//   __dirname + `../../../../uploads/${folderInitial}/`;
// const folderUploded = __dirname + `../../../../uploads/${newFolder}/`;
// if (!fs.existsSync(folderUploded)) {
//   // Vérifiez si le dossier n'existe pas
//   fs.mkdir(folderUploded, (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// }
// fs.readdir(folderUplodedInitial, (err, files) => {
//   if (err) {
//     throw err;
//   }
//   //si le dossier contient plus de 1 fichier
//   if (files.length > 1) {
//     // je boucle sur tout mes fichiers sauf le dernier
//     for (let i = 0; i < files.length - 1; i++) {
//       //je les supprimes
//       fs.unlink(folderUplodedInitial + files[i], (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log(`${files[0]} has been deleted`);
//       });
//     }
//   }
// });
