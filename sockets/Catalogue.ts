import { Socket } from 'socket.io';
import CatalogueModel, { Catalogue } from '../class/System_Catalogue';


export const createCatalogue = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createCatalogue', (catalogue: any, callback: Function) => {

        console.log(catalogue);
        
        if (!catalogue) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun catalogo"
            });
        }
        

        let catalogueN = new CatalogueModel({
            name: catalogue.name,
            element_name: catalogue.element_name,
            element_currency: catalogue.element_currency,
            element_image: catalogue.element_image,
            element_discount: catalogue.element_discount,
            element_value: catalogue.element_value 
        });
        
        catalogueN.save((err: Error, catalogueSave: any)=>{
            if(err){
                console.log(err);
                return callback({
                    ok:false,
                    mensaje: 'error al guardar',
                    err: err
                });
            }
            console.log(catalogueSave);
            callback({
                ok: true,
                mensaje: 'Catalogo Guardado'
            });
            io.emit('reloadCatalogue');
            return console.log('emitiendo');
        });
        

        
        

  
    });
} 

export const OneCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('catalogueById', async (id: any, callback: Function) => {
        console.log(id);
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        
        let catalogueOne = await CatalogueModel.findById(id);
        
            console.log(catalogueOne);
            callback({
                ok: true,
                catalogueOne
            });
        });
    
}

export const RemoveCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('removeCatalogue', async (id: any, callback: Function) => {
        console.log(id);
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }

        let catalogueOne = await CatalogueModel.findById(id);

        
        CatalogueModel.remove(catalogueOne, (err) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    error: "problemas al buscar medicos",
                    err
                });
            }
            
        
    
            callback({
                ok: true,
                mensaje: 'catalogo eliminado'
            });
            io.emit('reloadCatalogue');
            return console.log('emitiendo');
    
    
        });
        });
    
}


export const UpdateCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('updateCatalogue', async (newCatalogue: any, callback: Function) => {
        console.log(newCatalogue);
        
        if (!newCatalogue) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun Catalogo"
            });
        }

        CatalogueModel.findById(newCatalogue._id, (err, encontrado) => {
            if (err) {
                return callback({
                    ok: false,
                    error: "error al buscar catalogo"
                });
            }
            if (!encontrado) {
                return callback({
                    ok: false,
                    error: "No existe catalogo"
                });
            }
            encontrado.name = newCatalogue.name;
            encontrado.element_name = newCatalogue.element_name;
            encontrado.element_imagen = newCatalogue.element_imagen;
            encontrado.element_currency = newCatalogue.element_currency;
            encontrado.element_discount = newCatalogue.element_discount;
            encontrado.element_value = newCatalogue.element_value;

    
            encontrado.save((err, catalgoGuardado) => {
                if (err) {
                    return callback({
                        ok: false,
                        error: "error al guardar",
                        err
                    });
                }
                callback({
                    ok: true,
                    medico: catalgoGuardado
                });
            });
        });
        });
    
}


