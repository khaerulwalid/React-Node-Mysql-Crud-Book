const mysql = require("mysql")
const {connectionDb} = require("../config/db")
const db = mysql.createConnection(connectionDb)

const {Book} = require("./class")

class Model {
    static async book() {
            const q = `SELECT * FROM books`

            let getBooks = (() => {
                return new Promise((resolve, reject) => {
                    db.query(q, (err, data) => {
                        if(err) {
                            reject(new Error(err))
                        } else if (data) {
                            let result = data.map(el => {
                                return new Book(el.id, el.title, el.desc, el.cover)
                            })
            
                            resolve(result)
                        }
                    })
                })
            })()

            return getBooks
    }
}


module.exports = Model