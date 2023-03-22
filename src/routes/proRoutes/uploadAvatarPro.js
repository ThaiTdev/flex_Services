module.exports = (app) => {
  app.post("/api/uploadAvatar", (req, res) => {
    if (!res) {
      // Gérer les erreurs de téléchargement
      return res.status(500).send(err);
    }
    const file = req.files.curriculum;
    const fileName = Date.now() + "_" + req.files.curriculum.name;
    let uploadPath =
      __dirname + "../../../../uploads/uploadAvatarPro/" + fileName;
    let routeImage =
      req.protocol +
      "://" +
      req.get("host") +
      "/uploads/uploadAvatarPro/" +
      fileName;
    console.log(routeImage);
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send("le fichier n'a pas pus être téléchargé");
      }
    });
    const message = "Fichier téléchargé avec succès !";
    res.json({ message, data: routeImage });
    // res.send(` Fichier téléchargé avec succès ! ${uploadPath} `);
  });
};
