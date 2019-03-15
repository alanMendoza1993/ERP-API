import { Socket } from 'socket.io';
import CatalogueModel from '../class/System_Catalogue';

export const load =  (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('load', async (tabla: any, callback: Function) =>  {
    var object;
        
        if (!tabla) {
            return callback({
                ok: false,
                error: "No se ha recibido ninguna tabla"
            });
        }
        
        if(tabla == 'catalogue'){
          object = await CatalogueModel.find();
          console.log(object);
        }
        
        if(object) {
            callback({
                ok: true,
                obj: object
            });
        } else {
            return callback({
                ok:false,
                mensaje: 'error al guardar'
            });

        }
           
        });
    
    };