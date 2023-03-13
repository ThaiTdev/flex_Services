const multer = require("multer");
const upload = multer({ dest: "Uploads/" });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage }).single("image");

module.exports = (app) => {
  app.post("/api/upload", upload.single("image"), async (req, res) => {
    const userData = req.params.element;
    console.log(userData);

    if (!res) {
      // Gérer les erreurs de téléchargement
      return res.status(500).send(err);
    }

    // Fichier téléchargé stocké dans req.file

    res.send(` Fichier téléchargé avec succès !  ${req.file}`);
  });
};
//Date.now() + "-" +
