const express = require('express');
const usuarioRouter = require('./src/routes/api/UsuarioApiRoutes');
const oficinaRouter = require('./src/routes/api/OficinaApiRoutes');
const servicoRouter = require('./src/routes/api/ServicoApiRoutes');
const etapaRouter = require('./src/routes/api/EtapaApiRoutes');
const statusRouter = require('./src/routes/api/StatusApiRoutes');
const imovelRouter = require('./src/routes/api/ImovelApiRoutes');
const marcaRouter = require('./src/routes/api/MarcaApiRoutes');
const enderecoRouter = require('./src/routes/api/EnderecoApiRoutes');
const app = express();
const cors = require('cors');
const http =require('http');
const server = http.createServer(app);
const Server = require('socket.io');
const io = Server(server);




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = 4000;

/*io.on('connection', (socket)=>{
    const username =  socket.handshake.query.username;
});

server.listen(3000, () => {
    console.log("Listening on port 3000")
});*/

//app.use(usuarioRouter);
//app.use(servicoRouter);
//app.use(statusRouter);
//app.use(etapaRouter);
app.use(imovelRouter);
app.use(usuarioRouter);
//app.use(enderecoRouter);
/*app.use(servicoController);
app.use('/', carroController);
app.use('/', marcaController);*/



app.listen(port, () =>{
    console.log('Servidor rodando');
});