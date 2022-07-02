const express = require('express');
const axios = require('axios');
const app = express()
const port = 3001
const api = "https://api.covid19api.com";
const cors = require('cors');
app.use(cors());

app.get('/api/summary', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    axios
    .get(api + "/summary")
    .then(resp => {
        console.log(`statusCode: ${resp.status}`);
        return res.json(resp.data);
    })
    .catch(error => {
        console.error(error);
    });
})

app.get('/api/dayone/country/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.params.id);
  axios
  .get(api + "/dayone/country/"+req.params.id)
  .then(resp => {
      console.log(`statusCode: ${resp.status}`);
      return res.json(resp.data);
  })
  .catch(error => {
      console.error(error);
  });
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Covid-19 API running on port ${port}`)
})