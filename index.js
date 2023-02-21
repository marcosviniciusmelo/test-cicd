
global.express = require('express') 
global.fs = require('fs')
global.axios = require('axios')

// Declaring Variables
const morgan = require('morgan'), cors = require('cors'),
      http = require('http'), https = require('https'),
      bodyParser = require('body-parser')

// Certificate
const credentials = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.cert')
}

// Declaring Ports And Host Application URL
let [unsecurePort, securePort, host] = 
    process.argv[2] != '-dev' 
    ?
    [80, 443, 'https://reviews-ws.webstore.com.br/'] 
    : 
    [3000, 3001, `http://localhost:3000/`]

// Inputing the vars on the global scope
global.unsecurePort = unsecurePort
global.securePort = securePort
global.host = host

// Express settings
const app = express()
    app.use(morgan('dev'))
    app.use(express.json({limit: '20mb'}))
    app.use(cors())


// Threading Error
app.use((error, req, res, next) => {
  return res.status(400).json({'sucesso': false, 'mensagem': error.toString() })
})

// Starting both http & https servers
const httpServer = http.createServer(app), httpsServer = https.createServer(credentials, app)

httpServer.listen(unsecurePort, console.log('HTTP Server running on port ' + unsecurePort))
httpsServer.listen(securePort, console.log('HTTPS Server running on port ' + securePort))