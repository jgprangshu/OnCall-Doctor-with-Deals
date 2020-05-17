var Coupon = require('../models/coupon')
var fs = require('fs');
const path = require("path");


exports.postCoupon = (req,res) =>{
    console.log(req.file)
    var newCoupon = new Coupon(req.body)
    // newCoupon.image.data = fs.readFileSync('C:/Users/prgogoi/Desktop/dealsProject/curefit.png')
    // newCoupon.img.contentType = 'image/png'
    newCoupon.save((err,coupon)=>{
        if(err){
            return res.status(400).json({
                err: "Not able to save the coupon"
            })
        }
        res.status(200).json({
            msg: "Coupon added Successfully"
        })
    })
}

exports.getCoupons = (req,res) =>{
    Coupon.find((err,coupons)=>{
        if(err){
            return res.status(400).json({
                err: "Unable to fetch coupons"
            })
        }
        res.status(200).json(coupons)
    })
}

exports.fetchByCouponId = (req,res) =>{
    const {couponId} = req.body
    Coupon.findOne({couponId}).exec((err,coupons) =>{
        if(err){
            return res.status(400).json({
                err: "Unable to fetch coupons"
            })
        }
        res.status(200).json(coupons)
    })
}

exports.countCoupons = (req,res) =>{
    Coupon.estimatedDocumentCount()
    .then(count =>{
        res.status(200).json({totalCoupons : count})
    })
    .catch(err => res.status(400)
    .json({err:'Error Fetching coupon count'}))
}

