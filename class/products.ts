
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface ProductsI extends mongoose.Document  {
    ID?: string;
    noProduct?: string;
    code?: string;
    vol?: number;

    title?: string;
    sku?: string;
    waitTime?: number;
    rode?: string;
    ivaType?: string;
    costing?: number;
    IEPStype?: string;
    category?: string;
    production?: string;

    weight?: number;
    price?: number;
    name?: string;
    capacity?: number;
    iva?: number;
    MN?: number;
    type?: string;
    IEPS?: string;
    typeBuy?: string;
    cfdi?: string;
    cfdiU?: string;
    description?: string;
    time?: string;
    day?: string;
    acquisition?: string;
    providerId?: string;
    unitSize?: string;
    minPurchase?: number;
    
  }

  export const Products = new Schema({
    name: {type: String, required: false},
    title: {type: String, required: false},
    sku: {type: String, required: false},
    waitTime: {type: Number, required: false},
    rode: {type: String, required: false},
    ivaType: {type: String, required: false},
    costing: {type: Number, required: false},
    IEPStype: {type: String, required: false},
    category: { type: Schema.Types.ObjectId, ref: 'Material', required: false},
    production: {type: String, required: false},
    unitSize: {type: String, required: false},
    minPurchase: {type: Number, required: false},
    ID: {type: String, required: false},
    noProduct: {type: String, required: false},
    code: {type: String, required: false},
    vol: {type: String, required: false},
    weight: {type: Number, required: false},
    price: {type: Number, required: false},
    iva: {type: Number, required: false}, 
    MN: {type: String, required: false},
    IEPS: {type: String, required: false},
    type: {type: String, required: false},
    typeBuy: {type: String, required: false},
    cfdi: {type: String, required: false},
    cfdiU: {type: String, required: false},
    description: {type: String, required: false},
    capacity: {type: Number, required: false},
    time: {type: String, required: false},
    acquisition: {type: String, required:false},
    day: {type: String, required: false},
    providerId: {type: Schema.Types.ObjectId, ref:  'Provider', required: false}
}, { collection: 'products' }); 

const ProductsModel = mongoose.model<ProductsI>('Products', Products);
export default ProductsModel;