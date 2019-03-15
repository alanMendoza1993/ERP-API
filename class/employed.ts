
 import mongoose from 'mongoose';
 export let Schema = mongoose.Schema;
 
 import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
/*  mongoose.connect('mongodb://localhost:27017/vsoftBD').then(res => console.log('mongo conectado ',res));
 */


  
  
 
 /* class Employed extends Typegoose */
 export interface EmployedI extends mongoose.Document  {
    /* @prop() */
    password?:  string;
    /* @prop() */
    noNomina?: string;
    /* @prop() */
    perfilType?: string;
    /* @prop() */
    status?: string;
/*     @prop()
 */    name?: string;
/*     @prop()
 */    lastName?: string;
/*     @prop()
 */    country?: string;
/*     @prop()
 */    state?: string;
/*     @prop()
 */    birth_city?:string;
/*     @prop()
 */    birth?: Date;
/*     @prop()
 */    sex?: string;
/*     @prop()
 */    civil?: string;
/*     @prop()
 */    weight?: string;
/*     @prop()
 */    height?: string;
/*     @prop()
 */    curp?: string;
    /* @prop() */
    rfc?: string;
    /* @prop() */
    nss?: string;
    /* @prop() */
    umf?: string;
    /* @prop() */
    email?: string;
    /* @prop() */
    life_city?: string;
    /* @prop() */
    phone?: string;
    /* @prop() */
    cellphone?: string;
    /* @prop() */
    street?: string;
    /* @prop() */
    noExt?: string;
   /*  @prop() */
    noInt?: string;
    /* @prop() */
    colony?: string;
    /* @prop() */
    dateEntry?: Date;
    /* @prop() */
    job?:  string;
    /* @prop() */
    bank?: string;
    /* @prop() */
    sdInt?: string;
    /* @prop() */
    departament?: string;
    /* @prop() */
    typeContract?: string;
    /* @prop() */
    branch?: string;
    /* @prop() */
    regime?: string;
    /* @prop() */
    day_salari?: number;
    /* @prop() */
    payment?: string;
    /* @prop() */
    payment_type?: string;
   /*  @prop() */
    journe_type?: string;
    /* @prop() */
    period?: string;
    /* @prop() */
    number_account?: number;
    /* @prop() */
    labor_union?: boolean;
    /* @prop() */
    rp?: string;
   /*  @prop() */
    rfc_employer?: string;
  }

  export const Employed = new Schema({
    password: {type: String, required:false}, //contraseña del usuario
    noNomina: {type: String, required: false},// numero de nomina
    perfilType: {type: String, required: false},//Tipo de cuenta
    status: {type: String, required: false}, //estatus de cuenta
        name: {type: String, required:false},// nombre del usuario
        lastName: {type: String, required: false}, //apellido del usuario
        country: {type: String, required: false}, //pais de nacimiento
        state: {type: String, required: false}, //estado de nacimiento
        birth_city: {type: String, required: false}, //ciudad de nacimiento
        life_city: {type: String, required: false}, //ciudad donde vive
        birth: {type: Date, required: false},   //fecha de nacimiento
        sex: {type: String, required: false}, // genero del usuario
        civil: {type: String, required: false}, //estado civil
        weight: {type: String, required: false}, //peso
        height: {type: String, required: false}, // alto
        curp: {type: String, required: false}, //curp
        rfc: {type: String, required: false},   //rfc
        nss: {type: String, required: false}, //numero de seguro social
        umf: {type: String, required: false}, //umf unidad de medicina familiar
         email: {type: String, required: false}, // correo electronico
        phone: {type: String, required: false},// numero telefono
        cellphone: {type: String, required: false}, // numero de celular
    
        street: {type: String, required: false}, //calle donde vive
        noExt: {type: String, required: false}, //numero exterior
        noInt: {type: String, required: false}, //numero interior
        colony: {type: String, required: false}, //colonia
    
        dateEntry: {type: Date, required: false}, //fecha de entrada
        job: {type: String, required: false},   //Puesto
        bank: {type: String, required: false},  //banco
        sdInt: {type: String, required: false}, //salario diario integrado
        departament: {type: String, required: false}, //departamento
        typeContract: {type: String, required: false}, //tipo de 
        branch: {type: String, required: false}, //sucursal donde labora
        regime: {type: String, required: false},    // honorarios o asalariado
        day_salari: {type: Number, required: false}, //salario diario
        payment: {type: String, required: false},// transeferia cheke etc
        payment_type: {type: String, required: false},//nominal obra mixto
        journe_type: {type: String, required: false}, //jornada laboral matutina vespertina nocturna etc
        period: {type: String, required: false}, // periodo de pago quincenal mensual etc
        number_account: { type: Number, required: false},// numero de cuenta
        labor_union: { type: Boolean, required: false}, // afiliacion  sindicato
        rp: {type: String, required: false},    // registro patronal
        rfc_employer: { type: String, required: false} // rfc del empleador
    
}, { collection: 'employed' }); 

const EmployedModel = mongoose.model<EmployedI>('Employed', Employed);
export default EmployedModel;

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