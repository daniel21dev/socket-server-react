
// servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );
        // Configuraciones de sockets
        this.io = socketio( this.server, {/* configuraciones */} );
    }

    middlewares(){
        // desplegar el directorio
        this.app.use( express.static( path.resolve(__dirname,'../public')));
    }

    consfigurarSockets(){
        new Sockets( this.io );
    }

    execute(){
        // inicializar middlewares
        this.middlewares();
        // inicializar sockets
        this.consfigurarSockets();
        // inicializar server
        this.server.listen(this.port,()=>{
            console.log(`Server corriendo en puerto : ${process.env.PORT}`);
        });
    }
}

module.exports = Server;