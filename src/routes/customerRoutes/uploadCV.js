const multer = require("multer");

// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.destination + "-" + Date.now());
  },
});
const fileFilter = (req, file, cb) => {
  if (file.nimetype === "image/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

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
    let routeImage = "../../../../uploads/uploadCvCustomer/" + fileName;
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send("mauvaise");
      }
    });
    const message = "Fichier téléchargé avec succès !";
    res.json({ message, data: routeImage });
    // res.send(` Fichier téléchargé avec succès ! ${uploadPath} `);
  });
};
