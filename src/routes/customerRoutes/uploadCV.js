module.exports = (app) => {
  app.post("/api/uploadCV", (req, res) => {
    if (!res) {
      // Gérer les erreurs de téléchargement
      return res.status(500).send(err);
    }
    const file = req.files.curriculum;
    const fileName = Date.now() + "_" + req.files.curriculum.name;
    let uploadPath =
      __dirname + "../../../../uploads/uploadCvCustomer/" + fileName;
    let routeImage =
      req.protocol +
      "://" +
      req.get("host") +
      "/uploads/uploadCvCustomer/" +
      fileName;

    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send("le fichier n'a pas pus être téléchargé");
      }
    });
    const message = "Fichier téléchargé avec succès !";
    res.json({ message, data: routeImage });
  });
};
