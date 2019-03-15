
 import mongoose from 'mongoose';
import { OrderProduction } from './orderProduction';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface OrderBuyI extends mongoose.Document  {
    coments?: string;
    IVA?: number;
    IVAMXN?: number;
    currency?: string;
/*     pending?: string;
*//*      pendingMXN?: string;
 */  Subtotal?: number;
    Total?: number;
    TotalMXN?: number;
/*     branch?: string;
 */ /* exchange_rate?: number; */
    expiration?: Date;
    CC?: string;
/*     cost_center?: string;
 */ creditDay?: string;
    documnet?: string;
    producedBy?: string;
    status?:string;
    type: string;
    date?:Date;
    folio?: string;
    bank: string;
    providerId?: string;
    waitDate: Date;
    
  }

  export const OrderBuy = new Schema({
    type: {type: String, required:false},
    coments: {type: String, required:false},
    iva: {type: Number, required:false},
    subTotal: {type: Number, required:false},
    total: {type: Number, required:false},
    IVMXN: {type: Number, required:false},
    currency: {type: String, required:false},
    pending: {type: String, required:false},
    pendingMXN: {type: String, required:false},
    Subtotal: {type: Number, required:false},
    Total: {type: Number, required:false},
    TotalMXN: {type: Number, required:false},
    expiration: {type: Date, required:false},
    CC: {type: String, required:false},
    documnet: {type: String, required:false},
    producedBy: {type: String, required:false},
    status: {type: String, required:false},
    dateCreate: {type: Date, required:false, default: new Date()},
    waitDate: {type: Date, required:false},
    folio: {type: Number, required:false, },
    bank: {type: String, required:false},
    orderProductionId: {type: String, required:false},
    providerid: { type: Schema.Types.ObjectId, ref: 'Provider', required: true},
    typeBuy:  {type: String, required: false},
    periodInit: {type: Date, required: false},
    periodEnd:  {type: Date, required: false},
    period: {type: String, required: false},
    pay:  {type: String, required: false},
    creditDays: {type: Number, required: false},
    creditInit: {type: String, required: false},
    creditDate: {type: Date, required: false}
    
}, { collection: 'ordersbuy' }); 

const OrderBuyModel = mongoose.model<OrderBuyI>('OrderBuy', OrderBuy);
export default OrderBuyModel;