"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.Employed = new exports.Schema({
    password: { type: String, required: false },
    noNomina: { type: String, required: false },
    perfilType: { type: String, required: false },
    status: { type: String, required: false },
    name: { type: String, required: false },
    lastName: { type: String, required: false },
    country: { type: String, required: false },
    state: { type: String, required: false },
    birth_city: { type: String, required: false },
    life_city: { type: String, required: false },
    birth: { type: Date, required: false },
    sex: { type: String, required: false },
    civil: { type: String, required: false },
    weight: { type: String, required: false },
    height: { type: String, required: false },
    curp: { type: String, required: false },
    rfc: { type: String, required: false },
    nss: { type: String, required: false },
    umf: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    cellphone: { type: String, required: false },
    street: { type: String, required: false },
    noExt: { type: String, required: false },
    noInt: { type: String, required: false },
    colony: { type: String, required: false },
    dateEntry: { type: Date, required: false },
    job: { type: String, required: false },
    bank: { type: String, required: false },
    sdInt: { type: String, required: false },
    departament: { type: String, required: false },
    typeContract: { type: String, required: false },
    branch: { type: String, required: false },
    regime: { type: String, required: false },
    day_salari: { type: Number, required: false },
    payment: { type: String, required: false },
    payment_type: { type: String, required: false },
    journe_type: { type: String, required: false },
    period: { type: String, required: false },
    number_account: { type: Number, required: false },
    labor_union: { type: Boolean, required: false },
    rp: { type: String, required: false },
    rfc_employer: { type: String, required: false } // rfc del empleador
}, { collection: 'employed' });
const EmployedModel = mongoose_1.default.model('Employed', exports.Employed);
exports.default = EmployedModel;
/*   export type ModelType<T> = mongoose.Model<InstanceType<T>>;
 */
/*    export const EmployedModel = new Employed().getModelForClass(Employed);
 */
/*
 export class EmployedModel  {
    public    password:  string;
    public    noNomina: string;
    public    perfilType: string;
    public    status: string;
    public    name: string;
    public    lastName: string;
    public    country: string;
    public    state: string;
    public    city:string;
    public    birth: Date;
    public    sex: string;
    public    civil: string;
    public    weight: string;
    public    height: string;
    public    curp: string;
    public    rfc: string;
    public    nss: string;
    public    umf: string;
    public    email: string;
    public    phone: string;
    public    cellphone: string;
    public    street: string;
    public    noExt: string;
    public    noInt: string;
    public    colony: string;
    public    dateEntry: Date;
    public    job:  string;
    public    bank: string;
    public    sdInt: string;
    public    typeJob: string;
    public    typeContract: string;
    public    branch: string;
    public    regime: string;
    public    day_salari: number;
    public    payment: string;
    public    payment_type: string;
    public    journe_type: string;
    public    period: string;
    public    union: string;
    public    number_account: number;
    public    labor_union: boolean;
    public    rp: string;
    public    rfc_employer: string;

    constructor (){
        this.rfc_employer = '';
        this.rp = '';
        this.labor_union = false;
        this.number_account = 0;
        this.union = '';
        this.period = '';
        this.journe_type = '';
        this.payment_type = '';
        this.payment = '';
        this.day_salari = 0;
        this.regime = '';
        this.password = '';
        this.noNomina = '';
        this.perfilType = '';
        this.status = '';
        this.name = '';
        this.lastName = '';
        this.country = '';
        this.state = '';
        this.city = '';
        this.birth = new Date();
        this.sex = '';
        this.civil = '';
        this.weight = '';
        this.height = '';
        this.curp = '';
        this.rfc = '';
        this.nss = '';
        this.umf = '';
        this.email = '';
        this.phone = '';
        this.cellphone = '';
        this.street = '';
        this.noExt = '';
        this.noInt = '';
        this.colony = '';
        this.dateEntry = new Date();
        this.job = '';
        this.bank = '';
        this.sdInt = '';
        this.typeJob = '';
        this.typeContract = '';
        this.branch = '';
    }
    
  } */
/*
*/
/*
 module.exports  = mongoose.model('Employed', Employed);  */
/* export = Employed; */
/*  module.exports = mongoose.model('Employed', Employed);
 */ 
