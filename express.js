const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.get('/', (req, res) => {
  res.status(200).send('mi pagina')
})
app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})
app.post('/pokemon', (req, res) => {
/*   let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  }) */
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('404')
})
app.listen((PORT), () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
