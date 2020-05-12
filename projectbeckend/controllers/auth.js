var User = require('../models/user');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt')

exports.signup = (req,res)=>{
    console.log(req.body)
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err: "Not able to save the user"
            })
        }
        return res.status(200).json({
            data: "User signup success"
        })
    })
};

exports.signin = (req,res) =>{
    const{email,password} = req.body;
    User.findOne({email}).exec((err,user)=>{
        if(err || !user){
            res.status(400).json({
                err: 'No User Found '
            }) 
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                err: "User email password doesnot match"
          })
        }
        const token = jwt.sign({_id : user._id},process.env.SECRET);
        res.cookie("token",token,{expire : new Date() + 999})

        const {email,_id,firstName,lastName,role} = user
        return res.status(200).json({
            token,email, id :_id,firstName,lastName,role
        })
    })
}

exports.signout = (req,res) =>{
    res.clearCookie("token")
    res.json({
        msg : "Logout Success"
    })
}

exports.countUsers = (req,res) =>{
    User.estimatedDocumentCount()
    .then(count =>{
        res.status(200).json({totalUsers : count})
    })
    .catch(err => res.status(400)
    .json({err:'Error Fetching user count'}))
}