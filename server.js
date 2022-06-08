const express = require(`express`)

require(`dotenv`).config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

app.get(`/`, function(req, res) {
    res.send(`Welcome to an Awesome App about Breads!`)
})

app.listen(PORT, function() {
    console.log(`nomming at port`, PORT)
})

const breadsController = require(`./controllers/bread_controller.js`)
app.use(`/breads`, breadsController)