const { Pro } = require("../../db/sequelize");
const auth = require("../../auth/auth");
const fs = require("fs");

module.exports = (app) => {
  app.put("/api/UpdateProProfil/:id", (req, res) => {
    const proId = req.params.id;
    const id = req.body.id;
    console.log(proId);
    Pro.update(req.body, {
      where: { pro_id: proId },
    })
      .then((_) => {
        Pro.findByPk(proId).then((user) => {
          if (user === null) {
            const message =
              "l'utilisateur n'existe pas. Réessayer dans quelques instants";
            res.status(404).json({ message });
          }

          const message = `L'utlisateur avec l'identifiant n° ${proId} a bien été modifié.`;
          res.json({ message, data: user });
        });
      })
      .catch((error) => {
        const message =
          "l'utilisateur n'a pas pu être modifié. Réessayer dans quelques instants";
        res.status(500).json({ message, data: error });
      });

    //////création du dossier initiale
    const newFolderUser = "uploadImagesPro" + "_" + id;
    const newFolderTheme = "uploadAvatarPro";
    // const folderInitial = "uploadAvatarPro" + "_" + id;
    const folderUplodedInitial =
      __dirname + `../../../../uploads/${newFolderUser}/${newFolderTheme}/`;
    // const folderUplodedInitial =
    //   __dirname + `../../../../uploads/${folderInitial}/`;

    //ce code efface tous les fichiers dans le dossier initiale apart le dernier.

    fs.readdir(folderUplodedInitial, (err, files) => {
      if (err) {
        throw err;
      }
      //si le dossier contient plus de 1 fichier
      if (files.length > 1) {
        // je boucle sur tout mes fichiers sauf le dernier
        for (let i = 0; i < files.length - 1; i++) {
          //je les supprimes
          fs.unlink(folderUplodedInitial + files[i], (err) => {
            if (err) {
              throw err;
            }
            console.log(`${files[0]} has been deleted`);
          });
        }
      }
    });
    fs.readdir(folderUplodedInitial, (err, files) => {
      if (err) {
        throw err;
      }
      //si le dossier contient plus de 1 fichier
      if (files.length > 1) {
        // je boucle sur tout mes fichiers sauf le dernier
        for (let i = 0; i < files.length - 1; i++) {
          //je les supprimes
          fs.unlink(folderUplodedInitial + files[i], (err) => {
            if (err) {
              throw err;
            }
            console.log(`${files[0]} has been deleted`);
          });
        }
      }
    });
  });
};
