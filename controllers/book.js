const Book = require("../models/book");
const get = (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).json({
        model: books,
        message: "success",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "probleme d'extraction",
      });
    });
};
const add = (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then(() =>
      res.status(201).json({
        model: book,
        message: "Obejet crée !",
      })
    )
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "probleme d'extraction",
      });
    });
};
const getById = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .populate("author")
    .populate("category")
    .exec()
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "Objet non trouvé",
        });
      } else {
        res.status(200).json({
          model: book,
          essage: "Objet trouvé",
        });
      }
    })
    .catch((error) =>
      res.status(404).json({
        message: "Objet non trouvé",
      })
    );
};
const update = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "Objet non trouvé",
        });
      } else {
        res.status(200).json({
          model: book,
          message: "Objet modifié",
        });
      }
    })
    .catch((error) =>
      res.status(400).json({
        error: error.message,
        message: "Données invalides",
      })
    );
};
const remove = (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprime" }))
    .catch((error) => res.status(400).json({ error }));
};
module.exports = {
  get: get,
  add: add,
  getById: getById,
  update: update,
  delete: remove,
};
