const express = require('express')
const axios = require('axios');
const cors = require('cors');
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
  });

app.post('/api/bmi', async (req, res) => {
    try {
      const response = await axios.post('https://bmi.p.rapidapi.com/v1/bmi', req.body, {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'bmi.p.rapidapi.com',
          'x-rapidapi-key': '06f4442320msh202a6df40bc862dp1bb8f7jsn556d090a2b93'
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error occurred');
    }
  });
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
