import express from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'

import routes from './routes'

const PORT = process.env.PORT || 8080

const app = express()
var http = Server(app)

app.use(bodyParser.json())

routes(app, express)

http.listen(PORT, () => {
    console.log(`tarot listening on *:${PORT}`)
  })
