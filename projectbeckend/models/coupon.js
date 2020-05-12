var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var couponSchema = new Schema({
    image:{
        data: Buffer,
        contentType: String
    },
    discount:{
        type:Number,
        required:true,
        maxlength: 32
    },
    couponId:{
        type: String,
        required: true,
        maxlength: 32,
        unique:true
    },
    name:{
        type:String,
        required:true,
        maxlength: 32,
        unique: true
    },
    description:{
        type: String,
        required: true,
        maxlength: 64,
    }

},{timestamps:true})

module.exports = mongoose.model("Coupon",couponSchema)
