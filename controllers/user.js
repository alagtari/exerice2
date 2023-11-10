const User = require("../models/user");

const addfavoris = (req, res) => {
    const userId = req.params.id;
    const bookId = req.body.bookId;
  
    User.updateOne({ _id: userId }, { $addToSet: { favorite: bookId } })
      .then((result) => {
        if (result.n === 0) {
          return res.status(404).json({
            message: "Utilisateur non trouvé",
          });
        }
        if (result.nModified === 0) {
          return res.status(200).json({
            message: "Livre déjà présent dans les favoris",
          });
        }
        res.status(200).json({
          message: "Livre ajouté aux favoris avec succès",
        });
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging
        res.status(500).json({
          error: "Une erreur est survenue lors de la mise à jour",
          message: "Erreur interne du serveur",
        });
      });
  };
  

module.exports = {
  addfavoris: addfavoris,
};
