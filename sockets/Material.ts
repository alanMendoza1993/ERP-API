import { Socket } from 'socket.io';
import MaterialsModel from '../class/material';


export const createMaterial = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createMaterial', async (material: any, callback: Function) => {
        console.log('ejecutando create material');
        material = new MaterialsModel({
            name: material.name,
            description: material.description
                });
                console.log(material);
                material.save((err:Error, materialSaved: Response) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: false,
                            mensaje: 'A ocurrido un problema al guardar',
                            err: 'el error es: ' + err
                        });
                    }
                    console.log(materialSaved);

                    callback({
                        ok: true,
                        mensaje: 'Nuevo Material Creado',
            
                    });

                });
        

    });
}

 export const giveMaterials = async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getMaterials', async (obj: any, callback: Function) => {
        let filters = obj.filters || {};
        MaterialsModel.find( filters, (err, materialsSaved) => {
            callback({
                ok: true,
                obj: materialsSaved
            });
        });
      
    });

} 

export const deleteMaterial = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('deleteMaterial', (id: any, callback: Function) => {
        
        MaterialsModel.findByIdAndDelete(id, (err, deleted) => {
            if (err) return callback({ ok: false});
            callback({ ok: true, deleted});
        });
    });
    
                
}
/* 
export const getMaterials = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getMaterials', (material: any, callback: Function) => {

        console.log(material);
       MaterialsModel.find({}, (err, materialSearch) => {
        return callback({
            ok: true,
            obj: materialSearch
        });
       })
              
        

       

    });
} */