const express = require('express')
const app = express()
const webroot = __dirname + '/public'
const port = 3000

app.use('/', express.static(webroot))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))