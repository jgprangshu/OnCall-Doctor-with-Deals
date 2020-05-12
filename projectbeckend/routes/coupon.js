const express = require('express')
const router = express.Router();
const {postCoupon,getCoupons,fetchByCouponId} = require('../controllers/coupon')

router.post('/coupon/entry', postCoupon)
router.get('/coupon/getCoupons', getCoupons)
router.post('/coupon/getCouponById', fetchByCouponId)

module.exports = router;