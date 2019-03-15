import mongoose from 'mongoose';
export let Schema = mongoose.Schema;



export interface UserI extends mongoose.Document  {
    userName?: string;
    roster?:  string;
    perfilType?:  string;
    status?:  boolean;
    password?: string;
    email?:  string;
    employeeId?:  string;
    
}

export const User = new Schema({
    
    userName: {type: String, required: false},
    password: {type: String, required: true},
    roster: {type: String, required:false},// nombre del usuario
    perfilType: {type: String, required:false},// nombre del catalogo
    status: {type: Boolean, required:false},//,imagen
    email: {type: String, required:false},// tipo de moneda
    employeeId:  {type: Schema.Types.ObjectId, ref: 'Employed', required: false}// descuentoo

}, { collection: 'users'});


const UserModel = mongoose.model<UserI>('User', User);
export default UserModel;

