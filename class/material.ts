
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;

  /* class Employed extends Typegoose */
  export interface MaterialI extends mongoose.Document  {
    name?: string;
    description?: string;
  }

  export const Materials = new Schema({
    name: {type: String, required: false},
    description: {type: String, required: false}
    
}, { collection: 'materials' }); 

const MaterialsModel = mongoose.model<MaterialI>('Materials', Materials);
export default MaterialsModel;