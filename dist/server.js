"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const enviroment_1 = require("./global/enviroment");
const socket_io_1 = __importDefault(require("socket.io"));
const socket = __importStar(require("./sockets/socket"));
const Employed = __importStar(require("./sockets/Employed"));
const Proveedor = __importStar(require("./sockets/Proveedor"));
const Catalogue = __importStar(require("./sockets/Catalogue"));
const Load = __importStar(require("./sockets/LoadData"));
const Elements = __importStar(require("./sockets/Element"));
const Products = __importStar(require("./sockets/Products"));
const ProductsInt = __importStar(require("./sockets/ProductsInt"));
const User = __importStar(require("./sockets/User"));
const Material = __importStar(require("./sockets/Material"));
const OrderProduction = __importStar(require("./sockets/OrderProduction"));
const OrderBuy = __importStar(require("./sockets/OrderBuy"));
const SalesProyect = __importStar(require("./sockets/SalesProyect"));
const SalesProductOrderBuy = __importStar(require("./sockets/SalesProductOrderBuy"));
const AccountProvider = __importStar(require("./sockets/AccountProvider"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        console.log('escuchando conexiones - sockets');
        this.io.on('connection', client => {
            console.log('nuevo cliente');
            socket.conectarCliente(client, this.io);
            socket.configUsuario(client, this.io);
            socket.signIn(client, this.io);
            Material.createMaterial(client, this.io);
            Material.giveMaterials(client, this.io);
            Material.deleteMaterial(client, this.io);
            User.createUser(client, this.io);
            Employed.createUser(client, this.io);
            User.signIn(client, this.io);
            User.verifyToken(client, this.io);
            OrderProduction.createOrderProduction(client, this.io);
            SalesProyect.giveSalesProyect(client, this.io);
            SalesProyect.trueSalesProyect(client, this.io);
            OrderProduction.editOrderProduction(client, this.io);
            OrderProduction.giveOrderProduction(client, this.io);
            OrderProduction.deleteOrder(client, this.io);
            AccountProvider.addAccount(client, this.io);
            OrderBuy.createOrder(client, this.io);
            OrderBuy.createOrders(client, this.io);
            OrderBuy.deleteOrder(client, this.io);
            OrderBuy.getOrder(client, this.io);
            AccountProvider.signProvider(client, this.io);
            Proveedor.createProvider(client, this.io);
            Proveedor.deleteProvider(client, this.io);
            Proveedor.getProvider(client, this.io);
            Products.deleteProduct(client, this.io);
            Products.createProduct(client, this.io);
            Products.editProducts(client, this.io);
            SalesProductOrderBuy.getProductsOrderBuy(client, this.io);
            ProductsInt.createProductInt(client, this.io);
            ProductsInt.deleteProductInt(client, this.io);
            ProductsInt.getProductInt(client, this.io);
            Products.getProducts(client, this.io);
            Products.getProduct(client, this.io);
            Products.getProductsProvider(client, this.io);
            Catalogue.createCatalogue(client, this.io);
            Catalogue.OneCatalogue(client, this.io);
            Catalogue.UpdateCatalogue(client, this.io);
            Catalogue.RemoveCatalogue(client, this.io);
            Elements.ElementCatalogue(client, this.io);
            Elements.UpdateElement(client, this.io);
            Elements.RemoveElement(client, this.io);
            Elements.ElementById(client, this.io);
            Load.load(client, this.io);
            socket.desconectar(client, this.io);
            /*  socket.conectarCliente(cliente, this.io);
             socket.addleague(cliente);
             socket.mensaje(cliente, this.io); */
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
