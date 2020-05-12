const express = require('express')
const router = express.Router();
const {postDoctor,getDoctor,countDoctors} = require('../controllers/doctor')

router.post('/doctor/entry',postDoctor)
router.get('/doctor/getDoctor', getDoctor)
router.get('/count/doctors',countDoctors)


module.exports = router;