const connectionDb = {
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "wall_db"
}

module.exports = {connectionDb}