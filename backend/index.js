if(!process.env.PRODUCTION) {
    require('dotenv').config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const router = require("./routes/index")


app.use(router)

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})