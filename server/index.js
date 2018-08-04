
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
const http = require('http');

app.set('port', config.port);

const server = http.createServer(app);

if(config.mode === 'development'){
    server.listen(config.port);
}else{
    const { host, port, dbName, user, pass } = config.dbConfig;

    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${dbName}`,{ useNewUrlParser: true }).then(() => {
    
        console.log(`
        --------------------------------------------------
            
            La conexion a la base de mongo fue exitosa
        
          User: ${user}        
          Host: ${host} 
          Puerto: ${port}
          Collection: ${dbName}   
          
        --------------------------------------------------
        `);
    
        server.listen(config.port);
    
    }).catch(err => console.log(err));
}

console.log("Servidor escuchando desde puerto:", config.port);


