const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book")

router.get("/",bookController.get)
router.post("/",bookController.add)
router.get("/:id",bookController.getById)
router.patch("/:id",bookController.update)
router.delete("/:id",bookController.delete)
module.exports =router