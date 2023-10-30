const Author = require("../models/author");

const add = (req, res) => {
  const author = new Author(req.body);
  author.save()
    .then(() =>
      res.status(201).json({
        model: author,
        message: "auteur cré !",
      })
    )
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "probleme d'extraction",
      });
    });
};


module.exports = {
  add: add,
};
