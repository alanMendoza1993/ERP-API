import { Socket } from 'socket.io';
import ProductsModel from '../class/products';
import ProductsOrderBuyModel from '../class/productsOrderBuy';
import OrderBuyModel from '../class/orderBuy';
/* import { Category } from '../class/System_CategoryProduct';
import ProductsOrderBuyModel from '../class/productsOrderBuy';
 */

export const createOrder = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createOrderBuy', async (order: any, callback: Function) => {
console.log('Create order buy ###################################', order);
        let products = order;  
        var folio;
        OrderBuyModel.find({},(err, orders:any[]) => {
            
            folio = orders.length+1;   
            console.log('folio #########################', folio);
            order = new OrderBuyModel({
                
                type: order.type,
                total: order.total,
                subTotal: order.subTotal,
                coments: order.coments,
                iva: order.iva,
                IVMXN: order.IVMXN,
                currency: order.currency,
                pending: order.pending,
                pendingMXN: order.pendingMXN,
                CC: order.CC,
                producedBy: order.producedBy,
                status: order.status,
                dateCreate: new Date(),
                waitDate: order.dateWait,
                folio: folio,
                bank: order.bank,
                providerid: order.providerId
                
            });
                    console.log('orden requisicion: ',order);
    
                    order.save((err:Error, save: any) => {
                        if(err){
                            console.log(err);
                            return callback({
                                ok: 'warning',
                                obj: 'A ocurrido un problema al guardar',
                                status: 'Error'
                            });
                        }
                        products.products.forEach( (material:any) => {
                                
                            ProductsModel.find({category: material._id, providerId: save.providerId }, (err:Error, producto:any) => {
                                if (err){
                                    return callback({
                                        ok: 'warning',
                                        obj: 'A ocurrido un problema al guardar',
                                        status: 'Error'
                                    });
                                }
                                let product = new ProductsOrderBuyModel({
                                    idProduct: producto._id,
                                    quantity: material.quantity,
                                    name:   material.name,
                                    price:   material.price,
                                    orderBuyId: save._id
                                });
    
                                product.save((err, save)=> {
                                    console.log('guardado: ',save);
                                })
                            });
                        });
                        
    
                        
    
                        callback({
                            ok: 'success',
                            obj: 'orden Creado',
                            status: 'Exito'
                
                        });
    
                    });
            
    
           
    
        } );  
       
    });
}

export const deleteOrder = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('deleteOrder', (id: any, callback: Function) => {
        
        ProductsModel.findByIdAndDelete(id, (err, deleted) => {
            if (err) return callback({ ok: false});
            callback({ ok: true, deleted});
        });
    });
    
                
}
export const createOrders = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createOrdersBuy', (order: any, callback: Function) => {
console.log('Create orders buy ###################################', order.data);
        let materialsP: any[]= order.data;
        console.log('ordenes de compra: ', order.data);
        order.data.forEach( (elementF:any) => {
            let  folio;
            OrderBuyModel.find({},(err, orders:any[]) => {
                
                console.log('ods ',orders);
                folio = orders.length+1; 
                
                let element = new OrderBuyModel({
                    
                    type: elementF.type,
                    total: elementF.total,
                subTotal: elementF.subTotal,
                coments: elementF.coments,
                iva: elementF.iva,
                IVMXN: elementF.IVMXN,
                currency: elementF.currency,
                pending: elementF.pending,
                pendingMXN: elementF.pendingMXN,
                CC: elementF.CC,
                producedBy: elementF.producedBy,
                status: 'Esperando Factura',
                dateCreate: new Date(),
                waitDate: elementF.dateWait,
                folio: folio,
                bank: elementF.bank,
                providerid: elementF.providerId,
                
                typeBuy: elementF.type,
                periodInit: elementF.periodInit,
                periodEnd: elementF.periodEnd,
                period: elementF.period,
                pay: elementF.pay,
                creditDays: elementF.creditDays,
                creditInit: elementF.creditInit,
                creditDate: elementF.creditDate
                
            });
            
            console.log('ordenes de compra Element: ', element);
           
            element.save((err:Error, save: any) => {
                if(err){
                    console.log(err);
                    return callback({
                        ok: 'warning',
                        obj: 'A ocurrido un problema al guardar',
                        status: 'Error'
                    });
                }

                console.log('sin productoooooo????????????', elementF);
                elementF.provedorMateriales.forEach( (material:any) => {
                    ProductsModel.find({category: material.material, providerId: save.providerId }, (err:Error, producto:any) => {
                        if (err){
                            return callback({
                                ok: 'warning',
                                obj: 'A ocurrido un problema al guardar',
                                status: 'Error'
                            });
                        }
                        
                        
                        let product = new ProductsOrderBuyModel({
                            idProduct: producto._id,
                            quantity: material.quantity,
                            name:   material.name,
                            price:   material.price,
                            orderBuyId: save._id
                        });
                        

                        product.save((err, save)=> {
                            console.log('guardado: ',save);
                        })
                    });
                });
               

                console.log(save);

                callback({
                    ok: 'success',
                    obj: 'orden Creado',
                    status: 'Exito'
        
                });

            });
            
            
        } );  

           
         
        });

             
        

               
        

       

    });
}
export const getOrder = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getOrderBuy', (order: any, callback: Function) => {
        console.log('##############ORDER BUY ################################');
        console.log(order.filters);
                OrderBuyModel.find(order.filters, (err:Error, search: any) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: 'warning',
                            obj: 'A ocurrido un problema al buscar',
                            status: 'Error'
                        });
                    }
                    if(!search){
                        console.log('no hay encontrado');
                        return callback({
                            ok: 'warning',
                            obj: 'No hemos encontrado ninguna orden',
                            status: 'Error'
                        });
                    }
                    callback({
                        ok: 'success',
                        obj: search,
                        status: 'Exito'
            
                    });
                });
               
        

       

    });
}

export const editOrder = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('editOrder', (order: any, callback: Function) => {
        console.log('############## EDIT ORDER BUY ################################');
                OrderBuyModel.find(order.filters, (err:Error, search: any) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: 'warning',
                            obj: 'A ocurrido un problema al buscar',
                            status: 'Error'
                        });
                    }
                    if(!search){
                        console.log(err);
                        return callback({
                            ok: 'warning',
                            obj: 'No hemos encontrado ninguna orden',
                            status: 'Error'
                        });
                    }

                    search.status = 'change';
                    callback({
                        ok: 'success',
                        obj: search,
                        status: 'Exito'
            
                    });
                });
               
        

       

    });
}
/* 
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
        }).populate({path: 'Provider'}) ;

               

       

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


            
            productSearch.category= obj.model.providerId,
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
                    obj: 'Producto actualizado'
                });
            });
        });
        
        
});
} */