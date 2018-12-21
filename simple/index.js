const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, 'localhost')
