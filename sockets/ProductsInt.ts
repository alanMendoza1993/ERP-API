import { Socket } from 'socket.io';

import ProductsIntModel from '../class/productsInt';
import { Materials } from '../class/material';


export const createProductInt = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createProductInt', (products: any, callback: Function) => {
        console.log('este es el pinche id que manda juan: ',products);
        console.log('#########################################################');
        products = new ProductsIntModel({
            
            name: products.name,
            description: products.description,
            accessories: products.accessories,
            caliber: products.caliber,
            cover: products.cover,
            high: products.high,
            install: products.install,
            long: products.long,
            molding: products.molding,
            parallel: products.parallel,
            quantity: products.quantity,
            size: products.size,
            thickness: products.thickness,
            width: products.width

    
            
        });
                console.log(products);

                products.save((err:Error, productGuardado: Response) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: false,
                            mensaje: 'A ocurrido un problema al guardar',
                            err: 'el error es: ' + err
                        });
                    }
                    console.log(productGuardado);

                    callback({
                        ok: true,
                        mensaje: 'Producto Creado',
            
                    });

                });
        

       

    });
}

export const deleteProductInt = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('deleteProductInt', (id: any, callback: Function) => {
        
        ProductsIntModel.findByIdAndDelete(id, (err, deleted) => {
            if (err) return callback({ ok: false});
            callback({ ok: true, deleted});
        });
    });
    
                
}

export const getProductInt = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProductInt', (obj: any, callback: Function) => {

        console.log('entrando a getProduct');
        let filters = obj.filters || {};
        console.log('entrando a get product con id', obj.id);
        ProductsIntModel.find(filters,(err, encontrado) => {

            console.log(encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        });

               

       

    });
}

/* export const getProductsInt = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProductsInt', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        if (!filters.category) console.log('no hai id');
        console.log('los filtros son ',filters);
        ProductsIntModel.find(filters,(err, encontrado) => {
            if(err) console.log('el error es el siguiente ',err);
            console.log('productos encontrados ',encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        }).populate('category','category.providerId');

               

       

    });
} */