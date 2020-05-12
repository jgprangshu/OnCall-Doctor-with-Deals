const express = require('express')
const router = express.Router();
const {postDoctor,getDoctor} = require('../controllers/doctor')

router.post('/doctor/entry',postDoctor)
router.get('/doctor/getDoctor', getDoctor)


module.exports = router;