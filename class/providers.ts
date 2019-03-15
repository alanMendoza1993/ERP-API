
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface ProviderI extends mongoose.Document  {
    key_account?: string;
    colony?: string;
    number?: Number;
    comercialName?: string;
    branch?: string;
    bank?: string;
    creditDay?: number;
    comment?: string;
    street?: string;
    NoExt?: string;
    NoInt?: string;
    location?: string;
    CP?: string;
    city?: string;
    state?: string;
    country?: string;

    credit?: number;
    businesName?: string;
    rfc?: string;
    legalRepresentative?: string;
    contact?: string;
    adress?: string;
    phone?: string;
    email?: string;
    
    phoneNumber?: string;
    
  }

  export const Provider = new Schema({
    businesName: {type: String, required:false},
    rfc: {type: String, required:false},
    legalRepresentative: {type: String, required:false},
    contact: {type: String, required:false},
    dateCreate: {type: Date, required:false},
    adress: {type: String, required:false},
    phone: {type: String, required:false},
    email: {type: String, required:false},
    credit: {type: Number, required:false},
    phoneNumber: {type: String, required:false},
    key_account: {type: String, required:false},
    colony: {type: String, required:false},
    number: {type: String, required:false},
    comercialName: {type: String, required:false},
    branch:{type: String, required:false}, 
    bank: {type: String, required:false},
    creditDay: {type: Number, required:false},
    comment: {type: String, required:false},
    street: {type: String, required:false},
    NoExt: {type: String, required:false},
    NoInt: {type: String, required:false},
    location: {type: String, required:false},
    CP: {type: String, required:false},
    city: {type: String, required:false},
    state: {type: String, required:false},
    country: {type: String, required:false}
}, { collection: 'providers' }); 

const ProveedorModel = mongoose.model<ProviderI>('Provider', Provider);
export default ProveedorModel;