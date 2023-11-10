const Comment = require("../models/comment");

const get = (req, res) => {
  Book.find()
    .populate("category")
    .populate({ path: "author", select: "-password" })
    .exec()
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
  const bookObject = new Book(req.body);
  bookObject
    .save()
    .then(() => {
      res.status(201).json({
        model: bookObject,
        message: "livre cree !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "probleme d'extraction",
      });
    });
};

const getById = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .populate("category")
    .populate("author")
    .exec()
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "livre non trouvé",
        });
      } else {
        res.status(200).json({
          model: book,
          message: "livre trouvé",
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
const update = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "livre non trouvé",
        });
      } else {
        res.status(200).json({
          model: book,
          message: "livre modifié",
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
  Task.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "livre supprime" }))
    .catch((error) => res.status(400).json({ error }));
};
module.exports = {
  get,
  add,
  getById,
  update,
  remove,
};
