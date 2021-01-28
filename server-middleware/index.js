const express = require('express');
const https = require('https');
const app = express();

const bodyParser = require('body-parser');

let data = '';
https.get('https://data.coa.gov.tw/Service/OpenData/EIR3010304.aspx', (resp) => {
  
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.use(bodyParser.json())
app.all('/', (req, res) => {
  res.json(JSON.parse(data))
})

module.exports = {
    handler:app,
    path:"api"
}
