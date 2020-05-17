const express = require('express')
const router = express.Router();
const {postDoctor,getDoctor,countDoctors} = require('../controllers/doctor')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-' + file.originalname)
    //   cb(null, new Date().toISOString() + file.originalname)
    }
  })
   
var upload = multer({ storage: storage })

router.post('/doctor/entry',upload.single('image'),postDoctor)
router.get('/doctor/getDoctor', getDoctor)
router.get('/count/doctors',countDoctors)


module.exports = router;