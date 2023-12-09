
const http = require('http')

const routes = require('./routes.js')

server = http.createServer(routes.handler)

server.listen(3000)