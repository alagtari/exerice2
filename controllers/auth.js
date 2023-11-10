const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        role: req.body.role,
      });
      user
        .save()
        .then((response) => {
          const newUser = response.toObject();
          delete newUser.password;
          res.status(201).json({
            model: newUser,
            message: "Utilisateur cree!",
          });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    })
    .catch((error) => res.status(500).json({ error }));
};
const login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "login ou pass incorrect" });
      }
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res.status(401).json({ message: "login ou MP inco" });
        }
        res.status(200).json({
          token: jwt.sign(
            { userId: user._id, role: user.role },
            "RANDOM_TOKEN_SECRET",
            {
              expiresIn: "24h",
            }
          ),
        });
      });
    })
    .catch((error) => res.status(500).json({ error: error }));
};

module.exports = {
  signup: signup,
  login:login
};
