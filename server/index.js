
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

const admin = require('firebase-admin');
const app = require('./app');
const config = require('config');
const http = require('http');
const port = config.get('Customer.port') || '8000';

   

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log("Servidor escuchando desde puerto:",port);


