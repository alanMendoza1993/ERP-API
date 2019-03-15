
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface OrderProductionI extends mongoose.Document  {
    noPetition?: string;
    branch?: string;
    producedBy?: string;
    cc?: string;
    bank?: string;
    noOrder?: string;
    bussinesName?: string;
    article?: string;
    keyInt?: number;
    orderName?: string;
    comment?: string;
/*     productCant?: string;
 */    shopping?: boolean;
    productWidth?: string;
    productLong?: string;
    productForm?: string;
    productWeight?: string;
    noPlane?: string;
    family?: string;
    caliber?: string;
    dateFinish?: string;
    dateStart?: string;
    cut?: boolean;
    immex?: boolean;
  }

  export const OrderProduction = new Schema({
    noPetition: {type: Number, required: false},
    branch: {type: String, required: false},
    noOrder: {type: Number, required: false},
    bussinesName: {type: String, required: false},
    producedBy: {type: String, required: false},
    cc: {type: String, required: false},
    bank: {type: String, required: false},
    dateCreate: {type: Date, required: false},
/*     productId: {type: Schema.Types.ObjectId, ref: 'ProductsInt', required: false},
 */    article: {type: String, required: false},
    shopping: {type: Boolean, required: false, default: false},
    keyInt: {type: Number, required: false},
    orderName: {type: String, required: false},
    comment: {type: String, required: false},
/*     productCant: {type: String, required: false},
 */    productWidth: {type: String, required: false},
    productLong: {type: String, required: false},
    productForm: {type: String, required: false},
    productWeight: {type: String, required: false},
    noPlane: {type: String, required: false},
    family: {type: String, required: false},
    caliber: {type: String, required: false},
    dateFinish: {type: Date, required: false},
    dateStart: {type: Date, required: false},
    cut: {type: Boolean, required: false},
    immex: {type: Boolean, required: false},

    /* new data */

    client:  {type: String, required: false},
    nameProyect:  {type: String, required: false}    
}, { collection: 'ordersProduction' }); 

const OrderProductionModel = mongoose.model<OrderProductionI>('OrderProduction', OrderProduction);
export default OrderProductionModel;