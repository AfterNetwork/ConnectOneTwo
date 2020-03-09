var app = require("express")()
app.use(require("express").static("static/"))
app.listen(process.env.PORT)
console.log("Ready!")