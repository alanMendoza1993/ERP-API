import { Socket } from 'socket.io';
import SalesProyectModel from '../class/salesProyect';
import { SalesProyect } from '../class/salesProyect';

export const trueSalesProyect = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('trueOrderProduction', async (obj: any, callback: Function) => {
        obj.forEach( (salesProyect: any) => {
            console.log('erden =====',salesProyect );
            
            let validation = false;
            
                SalesProyectModel.findById(salesProyect._id,(err, search:any)=>{
                    search.materials.forEach( (material: any, index) => {
                        console.log('insertando ', salesProyect.materials[index].quantityPending);
                        material.quantityPending = salesProyect.materials[index].quantityPending;
                    if(material.quantityPending != 0){
                        validation = true;
                    }
                });
                if (!validation){
                
                    search.oc= true;
                }
                
                search.save((err: Error, save:any) => {
                    if(err) console.log(err);
                    if(err) return  callback({
                        ok: 'warning',
                        status: 'Error',
                        obj: save
                    });
                    callback({
                        ok: 'success',
                        status: 'Exito',
                        obj: save
                    });
                });

            });

            
           
           
       });
        
});
 }

export const giveSalesProyect = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getSalesProyect', async (obj: any, callback: Function) => {
        let filters = obj.filters || {};
        console.log(filters);
        SalesProyectModel.find(filters).populate('materials.category').populate('orderProductionId').sort({dateFinish: 1}).exec((err, ordersres) => {
            console.log(ordersres);
            callback({
                ok: 'success',
                status: 'Exito',
                obj: ordersres
            });
      
    });

});
 }