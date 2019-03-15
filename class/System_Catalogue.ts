import mongoose from 'mongoose';
export let Schema = mongoose.Schema;

import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';


export interface Catalogue extends mongoose.Document  {
    /* @prop() */
    name?:  string;
  /*   @prop() */
    element_name?:  boolean;
    element_imagen?:  boolean;
    /* @prop() */
    element_currency?:  boolean;
    /* @prop() */
    element_discount?:  boolean;
    /* @prop() */
    element_value?:  boolean;
    
}

export const Catalogue = new Schema({
    name: {type: String, required:false},// nombre del usuario
    element_name: {type: Boolean, required:false},// nombre del catalogo
    element_image: {type: Boolean, required:false},//,imagen
    element_currency: {type: Boolean, required:false},// tipo de moneda
    element_discount: {type: Boolean, required:false},// descuentoo
    element_value: {type: Boolean, required:false},// valor

}, { collection: 'catalogue' });


const CatalogueModel = mongoose.model<Catalogue>('Catalogue', Catalogue);
export default CatalogueModel;

