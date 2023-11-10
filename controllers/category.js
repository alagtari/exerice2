const Category = require("../models/category");

const get = (req, res) => {
  Category.find()
    .then((category) => {
      res.status(200).json({
        model: category,
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
  category
    .save()
    .then(() => {
      res.status(201).json({
        model: category,
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

module.exports = {
  get,
  add,
};
