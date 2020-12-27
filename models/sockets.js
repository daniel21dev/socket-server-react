
class Sockets{

    constructor( io ){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        // On connection
        this.io.on('connection',( socket ) =>{
            // escuchar y hacer un cosole.log de la data
            socket.on('mensaje-to-server',( data )=>{
                console.log( data );
                // manda un mensaje global ( por el io )
                this.io.emit('mensaje-from-server', data)
            });

        });
    }
}

module.exports = Sockets;