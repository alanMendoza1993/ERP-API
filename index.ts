import Server from "./server";
import mongoose from 'mongoose';

const providerCtrl = require('./sockets/Proveedor');


/* import router from "./routes/router";
 */import bodyParser from 'body-parser';
import cors from 'cors';



mongoose.connection.openUri('mongodb://localhost:27017/vsoftBD', (err: any) => {
    if (err) throw err;
    console.log("Base de datos Online");
});

const server = Server.instance;

/* server.app.get('/ids', providerCtrl.getProvider);
 */


 server.app.use(bodyParser.urlencoded({extended: true}));
 server.app.use(bodyParser.json());
 server.app.use(cors({ origin: true, credentials: true}));
/*  server.app.use('/', router);
 */


server.start(() => {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
}); 
