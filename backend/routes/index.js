const express = require("express")
const router = express.Router()

const routerBook = require("./books")

router.get("/", (req, res, next) => {
    res.json("Hello, this is backend")
})

router.use("/books", routerBook)

module.exports = router