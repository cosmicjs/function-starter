const app = require('express')()
const handler = require('./index').handler
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  handler(null, null, (err, response) => {
    res.send(response.body)
  })
})
app.listen(PORT)
console.log(`Listening on port ${PORT}`)