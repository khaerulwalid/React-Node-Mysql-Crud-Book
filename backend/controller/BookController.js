const Model = require("../model/Model")

class BookController {
    static async GetAllBook(req, res, next) {
        try {
            let data = await Model.book()

            res.json(data)
        } catch (error) {
            next(error)
        }
    }

    static async PostBook(req, res, next) {
        try {
            console.log(req.body, "<<<Req Body");
            const {title, desc, cover} = req.body

            let status = await Model.PostBook(title, desc, cover)

            res.status(201).json({status})
        } catch (error) {
            console.log(error, "<<Error Post Book");
            next(error)
        }
    }
}


module.exports = BookController