const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book")
const userController = require("../controllers/user")

router.get("/",bookController.get)
router.get("/:id",bookController.getById)
router.post("/",bookController.add)
router.patch("/:id",bookController.update)
router.delete("/:id",bookController.remove)
router.patch("/like/:id",userController.addfavoris)

module.exports =router