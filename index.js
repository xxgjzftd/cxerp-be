const express = require('express')
const app = express()
const port = 3000

app.get('/list', (req, res) => {
  res.send({ data: ['item1', 'item2'] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})