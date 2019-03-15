"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const mongoose_1 = __importDefault(require("mongoose"));
const providerCtrl = require('./sockets/Proveedor');
/* import router from "./routes/router";
 */ const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.connection.openUri('mongodb://localhost:27017/vsoftBD', (err) => {
    if (err)
        throw err;
    console.log("Base de datos Online");
});
const server = server_1.default.instance;
/* server.app.get('/ids', providerCtrl.getProvider);
 */
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
/*  server.app.use('/', router);
 */
server.start(() => {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
});
