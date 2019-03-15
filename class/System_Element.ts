import mongoose from 'mongoose';
export let Schema = mongoose.Schema;

export interface ElementI extends mongoose.Document  {
    /* @prop() */
    name?:  string;
    discount?:  number;
    value?:  number;
    currency?:  string;
    image?:  string;
    idCatalogue?:  string;

}

export const Element = new Schema({
   name: {type: String, required:false},
   discount: {type: Number, required:false},
   value: {type: Number, required:false},
   currency: {type: String, required:false},
   image: {type: String, required:false},
   idCatalogue: {type: String, required:false, ref: 'Catalogue'}

});

const ElementModel = mongoose.model<ElementI>('Element', Element);
export default ElementModel;