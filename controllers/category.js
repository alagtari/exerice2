const Category = require("../models/category");
const get = (req, res) => {
  Category.find()
    .then((categorys) => {
      res.status(200).json({
        model: categorys,
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
  const category = new Category(req.body);
  category.save()
    .then(() =>
      res.status(201).json({
        model: category,
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
  Category.findOne({ _id: req.params.id })
    .then((category) => {
      if (!category) {
        res.status(404).json({
          message: "Objet non trouvé",
        });
      } else {
        res.status(200).json({
          model: category,
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
  Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((category) => {
      if (!category) {
        res.status(404).json({
          message: "Objet non trouvé",
        });
      } else {
        res.status(200).json({
          model: category,
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
  Category.deleteOne({ _id: req.params.id })
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