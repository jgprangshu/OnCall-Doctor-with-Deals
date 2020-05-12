const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 64
    },
    image:{
        data: Buffer,
        contentType: String
    },
    qualification:{
        type: String,
        required: true,
        maxlength: 32
    },
    speciality:{
        type: String,
        required: true,
        maxlength: 32
    },
    experience:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
        maxlength: 32
    },
    fees:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Doctor",doctorSchema)