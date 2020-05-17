var Doctor = require('../models/doctor')
var fs = require('fs');
const path = require("path");
const multer = require('multer')
const upload = multer({dest:'uploads'})


exports.postDoctor = (req,res) =>{
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
     var newDoctor = new Doctor(req.body)
    // // newDoctor.image.data = fs.readFileSync('C:/Users/prgogoi/Desktop/dealsProject/doctor6.png')
     newDoctor.image = file.path.replace(/\\/g, "/")
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

exports.countDoctors = (req,res) =>{
    Doctor.estimatedDocumentCount()
    .then(count =>{
        res.status(200).json({totalDoctors : count})
    })
    .catch(err => res.status(400)
    .json({err:'Error Fetching doctor count'}))
}

