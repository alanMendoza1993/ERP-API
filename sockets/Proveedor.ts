
import { Socket } from 'socket.io';


import ProviderModel from '../class/providers';
import OrderBuyModel from '../class/orderBuy';
import { ProviderI } from '../class/providers';





export const createProvider = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createProvider', (provider: any, callback: Function) => {

        
        provider = new ProviderModel({
/*             businesName: provider.businesName,
rfc: provider.rfc,
legalRepresentative: provider.legalRepresentative,
contact: provider.contact,
adress: provider.adress,
phone: provider.phone,
email: provider.email,
acquisition: provider.acquisition,
credit: provider.credit,
phoneNumber: provider.phoneNumber,
 */

businesName: provider.businesName,
rfc: provider.rfc,
legalRepresentative: provider.legalRepresentative,
contact: provider.contact,
adress: provider.adress,
phone: provider.phone,
email: provider.email,
credit: provider.credit,
phoneNumber: provider.phoneNumber,
key_account: provider.key_account,
colony: provider.colony,
number: provider.number,
comercialName: provider.comercialName,
branch: provider.branch,
bank: provider.bank,
dateCreate: new Date(),
creditDay: provider.creditDay,
comment: provider.comment,
street: provider.street,
NoExt: provider.NoExt,
NoInt: provider.NoInt,
location: provider.location,
CP: provider.CP,
city: provider.city,
state: provider.state,
country: provider.country
        });
                console.log(provider);

                provider.save((err:Error, providerGuardado: ProviderI) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: false,
                            mensaje: 'A ocurrido un problema al guardar',
                            err: 'el error es: ' + err
                        });
                    }
                    console.log(providerGuardado);

                    callback({
                        ok: true,
                        idProvider: providerGuardado._id,
                        mensaje: 'Nuevo Proveedor Creado',
            
                    });

                });
        

       

    });
}

export const deleteProvider = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('deleteProvider', (id: any, callback: Function) => {
        
        ProviderModel.findByIdAndDelete(id, (err, deleted) => {
            if (err) return callback({ ok: false});
            callback({ ok: true, deleted});
        });
    });
    
                
}

export const getProvider = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProvider', (obj: any, callback: Function) => {
        let filters = obj.filters || {};

        var desde = obj.desde || 0;
        var limit = obj.limit || 0;
        ProviderModel.find(filters, (err, search) => {
            console.log('entrando');
            if(err) return callback({ok: false, obj: 'error al cargar'});
            console.log(err);
            callback({
                ok: true,
                obj: search
            })
        }).skip(desde).limit(limit);

                });
    
                
}

/* providerCtrl.getProvider =  async (req, res) => {
    var findProvider:any = [];
    var OrdersBuyFind:any = [];
    ProviderModel.find({}, async (err, busqueda)=> {
        findProvider = await busqueda;
         console.log(findProvider); 
    });
    OrdersBuyFind = await OrderBuyModel.find({});
    OrdersBuyFind.forEach( orders => {
        findProvider.forEach( provider => {
             console.log(orders);
             if(orders.provider == provider.NombreComercial ) {
                    orders.providerId = provider._id;
                    orders.save((err,guardados) => {
                        if(err) console.log('tengo miedo');
                        console.log(' ya chingamos');
                    });
            } else {
                console.log('no compatible');
            }
        });
    });
    OrdersBuyFind.save((err, guardados) => {
        if(err) console.log('valio madres');
        console.log(' ya chingamos');
    });



    res.status(200).json({
        ok: true,
        msj: 'no creo que la armen'
    });
}

module.exports = providerCtrl;

    */
  