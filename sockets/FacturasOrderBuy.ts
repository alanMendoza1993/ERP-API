import { Socket } from 'socket.io';
import FacturasOrderBuyModel from '../class/facturasOrderBuy';

export const createFacturasOrderBuy = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createFacturasOrderBuy', async (order: any, callback: Function) => {
        console.log('ejecutando create material', order);
        products = await order.material;
        var products: any[];
        order = new OrderProductionModel({
            noPetition: order.noPetition,
            nameProyect: order.nameProyect,
            client: order.client,
            dateCreate: new Date(),
            dateFinish: order.dateFinish,
            
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