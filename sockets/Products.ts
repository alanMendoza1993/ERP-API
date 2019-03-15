import { Socket } from 'socket.io';

import ProductsModel from '../class/products';
import { Category } from '../class/System_CategoryProduct';


export const createProduct = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createProduct', (products: any, callback: Function) => {

        
        products = new ProductsModel({
            
            name: products.name,
            title: products.title,
            sku: products.sku,
            waitTime: products.waitTime,
            rode: products.rode,
            ivaType: products.ivaType,
            costing: products.costing,
            IEPStype: products.IEPStype,
            category: products.category,
            production: products.production,
            description: products.description,
            capacity: products.capacity,
            time: products.time,
            day: products.day,
            acquisition: products.acquisition,
            providerId: products.providerId,
            unitSize: products.unitSize,   
            minPurchase: products.minPurchase,
            ID: products.ID,
            noProduct: products.noProduct,
            code: products.code,
            vol: products.vol,
            weight: products.weight,
            price: products.price,
            iva: products.iva,
            MN: products.MN,
            IEPS: products.IEPS,
            type: products.type,
            typeBuy: products.typeBuy,
            fdi: products.fdi,
            fdiU: products.fdiU
            
        });
                console.log(products);

                products.save((err:Error, productGuardado: Response) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: 'warning',
                            obj: 'A ocurrido un problema al guardar',
                            status: 'Error'
                        });
                    }
                    console.log(productGuardado);

                    callback({
                        ok: 'success',
                        obj: 'Producto Creado',
                        status: 'Exito'
            
                    });

                });
        

       

    });
}

export const deleteProduct = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('deleteProduct', (id: any, callback: Function) => {
        
        ProductsModel.findByIdAndDelete(id, (err, deleted) => {
            if (err) return callback({ ok: false});
            callback({ ok: true, deleted});
        });
    });
    
                
}

export const getProduct = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProduct', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        console.log('entrando a get product con id', obj.id);
        ProductsModel.find(filters,(err, encontrado) => {

            console.log(encontrado);
            callback({
                ok: 'false',
                obj: encontrado
            });
        });

               

       

    });
}

export const getProducts = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProducts', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        if (!filters.category) console.log('no hai id');
        console.log('los filtros son ',filters);
        ProductsModel.find(filters,(err, encontrado) => {
            if(err) console.log('el error es el siguiente ',err);
            console.log('productos encontrados ',encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        })/* .populate({path: 'Provider'}) */;

               

       

    });
}

export const getProductsProvider = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProductsProvider', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        if (!filters.category) console.log('no hai id');
        console.log('los filtros son ',filters);
        ProductsModel.find(filters).populate('providerId').exec((err, encontrado) => {
            if(err) console.log('el error es el siguiente ',err);
            console.log('productos encontrados ',encontrado);
            callback({
                ok: false,
                obj: encontrado
            });

               

       

    });
});
}

export const editProducts = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('editProducts', (obj: any, callback: Function) => {
        console.log('ididididididididididididididididiidid ',obj.model.productId);
        ProductsModel.findById(obj.model.productId, (err, productSearch: any) => {
            if (err){
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'Error al buscar el producto'
                });
            }
            if (!productSearch){
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'no se encontro ningun producto con ese id'
                });
            }


            
            productSearch.category= obj.model.category,
            productSearch.providerId= obj.model.providerId
            

            productSearch.save((err:Error, save:any) => {
                if (err){
                    return callback({
                        ok: 'warning',
                        status: 'Error',
                        obj: 'Error al guardar el producto'
                    });
                }
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'Producto actualizado',
                    save
                });
            });
        });
        
        
});
}