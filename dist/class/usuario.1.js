"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Empleados = new Schema({
    password: { type: String, required: false },
    noNomina: { type: String, required: false },
    perfilType: { type: String, required: false },
    status: { type: String, required: false },
    generals: {
        name: { type: String, required: false },
        lastName: { type: String, required: false },
        country: { type: String, required: false },
        state: { type: String, required: false },
        city: { type: String, required: false },
        birth: { type: Date, required: false },
        sex: { type: String, required: false },
        civil: { type: String, required: false },
        weight: { type: String, required: false },
        height: { type: String, required: false },
        curp: { type: String, required: false },
        rfc: { type: String, required: false },
        nss: { type: String, required: false },
        umf: { type: String, required: false }
    },
    contact: {
        email: { type: String, required: false },
        phone: { type: String, required: false },
        cellphone: { type: String, required: false },
        city: { type: String, required: false },
        street: { type: String, required: false },
        noExt: { type: String, required: false },
        noInt: { type: String, required: false },
        colony: { type: String, required: false },
    },
    others: {
        dateEntry: { type: Date, required: false },
        job: { type: String, required: false },
        bank: { type: String, required: false },
        sdInt: { type: String, required: false },
        typeJob: { type: String, required: false },
        typeContract: { type: String, required: false },
        branch: { type: String, required: false },
        regime: { type: String, required: false },
        day_salari: { type: Number, required: false },
        payment: { type: String, required: false },
        payment_type: { type: String, required: false },
        journe_type: { type: String, required: false },
        period: { type: String, required: false },
        union: { type: String, required: false },
        number_account: { type: Number, required: false },
        labor_union: { type: Boolean, required: false },
        //registtro Patronal
        rp: { type: String, required: false },
        rfc_employer: { type: String, required: false }
    }
}, { collection: 'empleados' });
module.exports = mongoose.model('Empleados', Empleados);
