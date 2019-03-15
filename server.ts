import express from 'express';
import cors from 'cors';
import http from 'http';
import {SERVER_PORT} from './global/enviroment';
import socketIO from 'socket.io';
import * as socket from './sockets/socket';
import * as Employed from './sockets/Employed';
import * as Proveedor from './sockets/Proveedor';
import * as Catalogue from './sockets/Catalogue';
import * as Load from './sockets/LoadData';
import * as Elements from './sockets/Element';
import * as Products from './sockets/Products';
import * as ProductsInt from './sockets/ProductsInt';
import * as User from './sockets/User';
import * as Material from './sockets/Material';
import * as OrderProduction from './sockets/OrderProduction';
import * as OrderBuy from './sockets/OrderBuy';
import * as SalesProyect from './sockets/SalesProyect';
import * as SalesProductOrderBuy from './sockets/SalesProductOrderBuy';
import * as AccountProvider from './sockets/AccountProvider';
import { deleteProduct } from './sockets/Products';
 
 



export default class Server {
    private static _instance: Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    
    }
    public static get instance(){
        return this._instance || (this._instance = new this());
    }
    private escucharSockets(){   
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
            Catalogue.createCatalogue(client,this.io);
            Catalogue.OneCatalogue(client,this.io);
            Catalogue.UpdateCatalogue(client,this.io);
            Catalogue.RemoveCatalogue(client,this.io);
            Elements.ElementCatalogue(client,this.io);
            Elements.UpdateElement(client,this.io);
            Elements.RemoveElement(client,this.io);
            Elements.ElementById(client,this.io);
            Load.load(client,this.io);
            socket.desconectar(client, this.io);
           /*  socket.conectarCliente(cliente, this.io);
            socket.addleague(cliente);
            socket.mensaje(cliente, this.io); */
        });}

    start( callback: Function){
        this.httpServer.listen(this.port, callback);
    }
}


