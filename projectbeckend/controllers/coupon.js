var Coupon = require('../models/coupon')
var fs = require('fs');
const path = require("path");


exports.postCoupon = (req,res) =>{
    var newCoupon = new Coupon(req.body)
    newCoupon.image.data = fs.readFileSync('C:/Users/prgogoi/Desktop/dealsProject/curefit.png')
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

