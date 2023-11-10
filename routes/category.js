const express = require("express")
const router = express.Router()
const bookController = require("../controllers/category")

router.get("/",bookController.get)
router.post("/",bookController.add)

module.exports =router