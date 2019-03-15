
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface ProductsIntI extends mongoose.Document  {
    name?: string;
    description?: string;
    materials?: [];
        
    
    
    
  }

  export const ProductsInt = new Schema({
    name: {type: String, required: false},
    description: {type: String, required: false},
    accessories:{type: Boolean, required: false},
    caliber:{type: Boolean, required: false},
    cover:{type: Boolean, required: false},
    high:{type: Boolean, required: false},
    install:{type: Boolean, required: false},
    long:{type: Boolean, required: false},
    molding:{type: Boolean, required: false},
    parallel:{type: Boolean, required: false},
    quantity:{type: Boolean, required: false},
    size:{type: Boolean, required: false},
    thickness:{type: Boolean, required: false},
    width:    {type: Boolean, required: false}
}, { collection: 'productsInt' }); 

const ProductsIntModel = mongoose.model<ProductsIntI>('ProductsInt', ProductsInt);
export default ProductsIntModel;