
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface SalesProyectI extends mongoose.Document  {
    orderProductionId: string;
    category: string;
    productId: string;
    quantity?: string;
    id?: string;
   
    
  }

  export const SalesProyect = new Schema({

    orderProductionId: { type: Schema.Types.ObjectId, ref: 'OrderProduction', required: false},
    oc: {type: Boolean, required: false, default: false},
    dateFinish: {type: Date, required: false},
    materials : [{
    product: { type: Schema.Types.ObjectId, ref: 'Products', required: false},
    name: { type: String, required: false},
    id: { type: Schema.Types.ObjectId, ref: 'Materials', required: true},
    quantity: {type: Number, required: false},
    quantityPending: {type: Number, required: false}
}]
}, { collection: 'salesProyect' }); 

const ProductsModel = mongoose.model<SalesProyectI>('SalesProyect', SalesProyect);
export default ProductsModel;