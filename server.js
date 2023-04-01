const express = require('express') //included in express install
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Mando!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})