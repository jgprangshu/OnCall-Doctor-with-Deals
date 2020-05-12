const express = require('express')
const router = express.Router();
const {postCoupon,getCoupons,fetchByCouponId,countCoupons} = require('../controllers/coupon')

router.post('/coupon/entry', postCoupon)
router.get('/coupon/getCoupons', getCoupons)
router.post('/coupon/getCouponById', fetchByCouponId)
router.get('/count/coupons',countCoupons)

module.exports = router;