import { Socket } from 'socket.io';
import ElementModel from '../class/System_Element';


export const ElementCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('elementCatalogue', async (elementE: any, callback: Function) => {
        console.log(elementE);
        
        if (!elementE) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        
        let element = new ElementModel({
            name: elementE.name,
            discount: elementE.discount,
            value: elementE.value,
            currency: elementE.currency,
            image: elementE.image,
            idCatalogue: elementE.idCatalogue

        });

        element.save((err: Error, elementSave: any) => {
            if(err){
                return callback({
                    ok: true,
                    err
                });
            }

            console.log(element);
            callback({
                ok: true,
                mensaje: 'Elemento guardadillo'
            });
            io.emit('reloadElement');
/*             return console.log('emitiendo');
 */

        });
        
            
        });
    
} 

export const ElementById = async (cliente:Socket, io: SocketIO.Server) => {
    
    cliente.on('elementById', async (id: any, callback: Function) => {
        
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        
        let element = await ElementModel.find({idCatalogue: id});
        if(!element) {
            return callback({
                ok: true,
                mensaje: 'erorr al traer datos'
            });
        }else {
         
            callback({
                ok: true,
                element
            });
               
            

    
        }
  
        });
        
    
} 

export const RemoveElement =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('removeElement', async (id: any, callback: Function) => {
        console.log(id);
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }

        let elementOne = await ElementModel.findById(id);

        
        ElementModel.remove(elementOne, (err) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    error: "problemas al buscar Elementos",
                    err
                });
            }
            
        
    
            callback({
                ok: true,
                mensaje: 'Elemento eliminado'
            });
            io.emit('reloadElement');
            return console.log('emitiendo');
    
    
        });
        });
    
}


export const UpdateElement =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('updateElement', async (newElement: any, callback: Function) => {
        console.log(newElement);
        
        if (!newElement) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun Elemento"
            });
        }

        ElementModel.findById(newElement._id, (err, encontrado) => {
            if (err) {
                return callback({
                    ok: false,
                    error: "error al buscar cElemento"
                });
            }
            if (!encontrado) {
                return callback({
                    ok: false,
                    error: "No existe celemento"
                });
            }
            encontrado.name = newElement.name;
            encontrado.image = newElement.image;
            encontrado.currency = newElement.currency;
            encontrado.discount = newElement.discount;
            encontrado.value = newElement.value;
            encontrado.idCatalogue = newElement.idCatalogue;

    
            encontrado.save((err, elementGuardado) => {
                if (err) {
                    return callback({
                        ok: false,
                        error: "error al guardar",
                        err
                    });
                }
                callback({
                    ok: true,
                    medico: elementGuardado
                });
            });
        });
        });
    
}