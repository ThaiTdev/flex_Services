const fs = require("fs");

module.exports = (app) => {
  app.post("/api/uploadImageResto/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const newFolderUser = "uploadImagesPro" + "_" + id;
    const newFolderTheme = "uploadImageResto";
    const folderUploded = __dirname + `../../../../uploads/${newFolderUser}/`;
    const folderUploded2 =
      __dirname + `../../../../uploads/${newFolderUser}/${newFolderTheme}/`;
    if (!fs.existsSync(folderUploded)) {
      // Vérifiez si le dossier n'existe pas
      fs.mkdir(folderUploded, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (!fs.existsSync(folderUploded2)) {
      fs.mkdir(folderUploded2, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    ////////// this code cancel file in uploadAvatarCustomer
    // fs.readdir(folderUploded, (err, files) => {
    //   if (err) {
    //     throw err;
    //   }
    //   for (const file of files) {
    //     fs.unlink(folderUploded + file, (err) => {
    //       if (err) {
    //         throw err;
    //       }
    //       console.log(`${file} has been deleted`);
    //     });
    //   }
    // });
    // //////////

    if (!res) {
      // Gérer les erreurs de téléchargement
      return res.status(500).send(err);
    }
    const file = req.files.imageResto;
    const fileName =
      Date.now(req.files.imageResto.name) + "_" + req.files.imageResto.name;
    let uploadPath = folderUploded2 + fileName;
    // let uploadPathTempo = folderUplodedTempo + fileName;
    let routeRestaurant =
      req.protocol +
      "://" +
      req.get("host") +
      `/uploads/${newFolderUser}/${newFolderTheme}/` +
      fileName;
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send("le fichier n'a pas pus être téléchargé");
      }
    });
    const message = "Fichier téléchargé avec succès !";
    res.json({
      message,
      data: { data1: routeRestaurant },
    });
  });
};
