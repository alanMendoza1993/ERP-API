
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;  
 
 /* class Employed extends Typegoose */
 export interface AccountProviderI extends mongoose.Document  {
    
    password?:  string;
    
    email?: string;
    
    providerId?: string;
    
    activate?: boolean;
   
  }

  export const AccountProvider = new Schema({
    password: {type: String, required:false}, //contraseña del usuario
    email: {type: String, required: false},// correo electronico
    providerId: {type: String, required: false},//id de proveedor
    active: {type: Boolean, required: false}, //estatus de cuenta
      
}, { collection: 'accountProvider' }); 

const AccountProviderModel = mongoose.model<AccountProviderI>('AccountProvider', AccountProvider);
export default AccountProviderModel;
