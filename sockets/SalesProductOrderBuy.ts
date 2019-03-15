import { Socket } from 'socket.io';

import ProductsOrderBuyModel from '../class/productsOrderBuy';


export const getProductsOrderBuy = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProductsOrderBuy', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        if (!filters.orderBuyId) console.log('no hai id');
        console.log('los filtros son ',filters);
        ProductsOrderBuyModel.find(filters,(err, encontrado) => {
            if(err) console.log('el error es el siguiente ',err);
            console.log('productos encontrados ',encontrado);
            callback({
                ok: 'success',
                status: 'Exito',
                obj: encontrado
            });
        })/* .populate({path: 'Provider'}) */;

               

       

    });
}