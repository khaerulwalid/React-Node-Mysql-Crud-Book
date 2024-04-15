const express = require("express")
const router = express.Router()

const BookController = require("../controller/BookController")

router.get("/", BookController.GetAllBook)
router.post("/", BookController.PostBook)

module.exports = router