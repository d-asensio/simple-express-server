const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())


app.get('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  res.status(204).send();
})

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  res.status(204).send();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})