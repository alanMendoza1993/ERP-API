import { Socket } from 'socket.io';
import OrderProductionModel from '../class/orderProduction';
import ProductsOrderProductionModel from '../class/productsOrderBuy';
import SalesProyectModel from '../class/salesProyect';



export const createOrderProduction = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createOrderProduction', async (order: any, callback: Function) => {
        console.log('ejecutando create material', order);
        products = await order.material;
        var products: any[];
        order = new OrderProductionModel({
            noPetition: order.noPetition,
            nameProyect: order.nameProyect,
            client: order.client,
            dateCreate: new Date(),
            dateFinish: order.dateFinish,
            /* 
            branch: order.branch,
            noOrder: order.noOrder,
            bussinesName: order.bussinesName,
            article: order.article,
            keyInt: order.keyInt,
            orderName: order.orderName,
            comment: order.comment,
             */
/*             productId: order.productId,
 *//*             productCant: order.productCant,
 */            /* productWidth: order.productWidth,
            productLong: order.productLong,
            productForm: order.productForm,
            productWeight: order.productWeight,
            noPlane: order.noPlane,
            family: order.family,
            caliber: order.caliber,
            dateStart: order.dateStart,
            cut: order.cut,
            immex: order.immex */
                });
                console.log('imprimiendo los productos fuera del save', products);
                order.save((err:Error, orderSaved: any) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: 'warning',
                            status: 'Error',
                            obj: 'A ocurrido un problema al guardar',
                            err: 'el error es: ' + err
                        });
                    }
                    console.log('imprimiemndo los productos dentro del save',products);
                    let materials: any[] = [];
                    products.forEach( element => {
                        materials.push({id:element.productId, quantity: element.quantity, quantityPending: element.quantity, name: element.name })
                        
                    });

                    let productsN = new SalesProyectModel({
                        orderProductionId: orderSaved._id,
                        materials: materials,
                        oc: false,
                        dateFinish:order.dateFinish
                            
                        
                    });
                        productsN.save((err, productSave) => {
                            if(err){
                                return callback({
                                    ok: 'warning',
                                    status: 'Error',
                                    obj: 'A ocurrido un problema al guardar',
                                    err: 'el error es: ' + err
                                });
                            }
                            callback({
                                ok: 'success',
                                status: 'Exito',
                                obj: 'Nueva Orden de Produccion Creada',
                    
                            });
                        });
                    
                    

                    

                    

                   

                });
                
                
            });
        }

        export const deleteOrder = (cliente:Socket, io: SocketIO.Server) => {
            cliente.on('deleteOrder', (id: any, callback: Function) => {
                
                OrderProductionModel.findByIdAndDelete(id, (err, deleted) => {
                    if (err) return callback({ ok: false});
                    callback({ ok: true, deleted});
                });
            });
            
                        
        }
        
        export const editOrderProduction = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('editOrderProduction', async (order: any, callback: Function) => {
        console.log('ejecutando create material');
        let id = order.id;
        console.log('Este es el order material  que se guarda ',order.material);
        
        
        if(!id) callback({ok: 'warning',status: 'Error', obj: 'sin id'});
        
    OrderProductionModel.findById(id,(err, search:any) => {
            search.producedBy = order.producedBy,
            search.cc= order.cc,
            search.bank= order.bank,
            search.shopping= true,
             search.material= order.material

             let saleProyect = new SalesProyectModel({
                orderProductionId: id,
                materials: order.material
            });
            saleProyect.materials.forEach( (element: any) => {
                element.quantityPending = element.quantity;
            });
            saleProyect.save((err, guardado) => {
                if(err) console.log('no guardado el sale');
                if(!err) console.log('si se guardo el sale');
            } );

             search.save( (err: Error, guardado:any)=> {
                if(err) { console.log('error al guardar');
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error al guardar',
                    err
                });}
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'orden guardada'
                });
            });
    });
                
        

    });
}

export const giveOrderProduction = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getOrderProduction', async (obj: any, callback: Function) => {
        let filters = obj.filters || {};
        console.log(filters);
        OrderProductionModel.find(filters, (err, ordersSaved) => {
            console.log(ordersSaved);
            callback({
                ok: 'success',
                    status: 'Error',
                obj: ordersSaved
            });
        });
      
    });

} 
export const trueOrderProduction = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('trueOrderProduction', async (obj: any, callback: Function) => {
        let id = obj.id || {};

        OrderProductionModel.findById({id}, (err, ordersSaved: any) => {
            if(err) console.log('error al buscar orden');
            ordersSaved.shopping = true;

            ordersSaved.save((err: Error, guardado: any) => {
                if(err) console.log('error al guardar dato');
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'Compra aceptada'
                });
            })
            
        });
      
    });

} 