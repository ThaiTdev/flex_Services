const jwt = require("jsonwebtoken");
const privateKey = require("../auth/privatekey");

module.exports = (req, res, next) => {
  //recupération du token passé dans le header de ma requête
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    //si il y en a pas je retourne ce message
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
    return res.status(401).json({ message });
  }
  //Bearer <JWT>
  //on utkilise la méthode "split(" ")[1]" pour effacer le terme "Bearer" et ne garder que le token
  const token = authorizationHeader.split(" ")[1];
  const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`;
      return res.status(401).json({ message, data: error });
    }

    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant de l'utilisateur est invalide.`;
      res.status(401).json({ message });
    } else {
      next();
    }
  });
};
