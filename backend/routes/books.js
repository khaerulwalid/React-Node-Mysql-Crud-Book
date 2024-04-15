const express = require("express")
const router = express.Router()


const mysql = require("mysql")
const {connectionDb} = require("../config/db")
const db = mysql.createConnection(connectionDb)

const BookController = require("../controller/BookController")

router.get("/", BookController.GetAllBook)

module.exports = router