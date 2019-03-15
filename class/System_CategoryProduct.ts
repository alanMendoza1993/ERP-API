import mongoose from 'mongoose';
export let Schema = mongoose.Schema;


export interface CategoryI extends mongoose.Document  {
    /* @prop() */
    name?:  string;
    description?:  string;
   

}

export const Category = new Schema({
   name: {type: String, required:false},
   description: {type: String, required:false}

}, { collection: 'category' });

const CategoryModel = mongoose.model<CategoryI>('Category', Category);
export default CategoryModel;