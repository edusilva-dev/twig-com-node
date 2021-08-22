const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

app.use(express.static(path.join(__dirname, "templates")))
app.set("views", path.join(__dirname, "public"))

routes(app)

app.listen(3334, () => console.log("server is running on port 3333"))

module.exports = app