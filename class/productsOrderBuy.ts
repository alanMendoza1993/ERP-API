
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface ProductsOrderBuyI extends mongoose.Document  {
    noPetition?: string;
   idProduct: string;
    quantity?: number;
  }

  export const ProductsOrderBuy = new Schema({  
      
         
       idProduct: {type: Schema.Types.ObjectId, ref: 'Products', required: false},
       quantity: {type: Number, required: false},
       price: {type: Number, required: false},
       name: {type: String, required: false},
       orderBuyId: {type: Schema.Types.ObjectId, ref: 'OrderBuy', required: false}
}, { collection: 'productsOrdersBuy' }); 

const ProductsOrderBuyModel = mongoose.model<ProductsOrderBuyI>('ProductsOrderBuy', ProductsOrderBuy);
export default ProductsOrderBuyModel;