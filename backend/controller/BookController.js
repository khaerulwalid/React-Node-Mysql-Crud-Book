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
}


module.exports = BookController