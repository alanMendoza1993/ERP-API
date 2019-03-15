
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface FacturasOrderBuyI extends mongoose.Document  {
    folioFactura?: string;
    folioProvider?: string;
    date?: string;
    orderBuyId?: string;
  }

  export const FacturasOrderBuy = new Schema({
    name: {type: String, required: false},
    description: {type: String, required: false}
    
}, { collection: 'facturasOrderBuy' }); 

const FacturasOrderBuyModel = mongoose.model<FacturasOrderBuyI>('FacturasOrderBuy', FacturasOrderBuy);
export default FacturasOrderBuyModel;