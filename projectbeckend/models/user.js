var mongoose = require('mongoose');
var crypto = require("crypto");
var uuidv1 = require("uuid/v1");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName:{
        type: String,
        required:true,
        maxlength:32,
        trim:true
    },
    lastName:{
        type: String,
        maxlength:32,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    salt: String,
    role:{
        type: Number,
        default: 0
    },
    encry_password:{
        type: String,
        required: true   
    }

},{timestamps:true})

userSchema.virtual("password")
.set(function(password){
    this._password = password
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
})
.get(function(){
    return this._password
})

userSchema.methods ={

    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },
 
    securePassword : function(plainPassword){
        if(!plainPassword) return "";
        try {
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest("hex");
        } catch (error) {
            return "";
        }
    }
}




module.exports = mongoose.model("User",userSchema)
