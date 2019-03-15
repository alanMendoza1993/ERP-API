import { Socket } from 'socket.io';
import CategoryModel from '../class/System_CategoryProduct';

export const CreateCategory =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createCategory', async (category: any, callback: Function) => {
        console.log(category);
        
        if (!category) {
            return callback({
                ok: false,
                error: "No se ha recibido nada"
            });
        }
        
         category = new CategoryModel({
            name: category.name,
            description: category.description

        });

        category.save((err: Error, categorySave: any) => {
            if(err){
                return callback({
                    ok: true,
                    err
                });
            }

            console.log(categorySave);
            callback({
                ok: true,
                mensaje: 'Nueva categoria guardada'
            });
            io.emit('reloadCategory');
/*             return console.log('emitiendo');
 */

        });
        
            
        });
    
} 