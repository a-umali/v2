const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user-auth', (req, res) => {

    const payload = req.body;
   
    res.send({ name: 'Test User', email: payload.email, auth_token: '1234567890'});
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
