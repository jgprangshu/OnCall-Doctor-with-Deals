var Doctor = require('../models/doctor')
var fs = require('fs');
const path = require("path");


exports.postDoctor = (req,res) =>{
    var newDoctor = new Doctor(req.body)
    newDoctor.image.data = fs.readFileSync('C:/Users/prgogoi/Desktop/dealsProject/doctor6.png')
    newDoctor.save((err,doctor)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                err: "Not able to save the doctor"
            })
        }
        res.status(200).json({
            msg: "Doctor added Successfully"
        })
    })
}

exports.getDoctor = (req,res) =>{
    Doctor.find((err,doctors)=>{
        if(err){
            return res.status(400).json({
                err: "Unable to fetch doctors"
            })
        }
        res.status(200).json(doctors)
    })
}

