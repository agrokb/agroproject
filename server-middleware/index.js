const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}