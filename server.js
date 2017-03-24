const express = require('express')
const path = require('path')
const request = require('request')

// variables:
const app = express()
const dir = (src) => path.join(__dirname, src)

// middlewares
app.use(express.static('./'))

// View:
app.get('/', (req, res) => res.sendFile(dir('./index.html')))

// Api
app.post('/api/uploads', (req, res) => {
  let r = request.post('http://192.168.2.113/api/uploadimage')
  req.pipe(r).pipe(res)
})

app.listen(3000, () => console.log('Server is running on port 3000'))
