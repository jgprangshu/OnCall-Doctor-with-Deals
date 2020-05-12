const express = require('express');
const router = express.Router();
const {signup,signin,signout,countUsers} = require('../controllers/auth');

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/signout',signout)
router.get('/count/users',countUsers)

module.exports = router;