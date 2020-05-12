require('dotenv').config() ;

const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const couponRoutes = require('./routes/coupon')
const doctorRoutes = require('./routes/doctor')

//DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>console.log("DB GOT OOPSS"))

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//ROUTES
app.use('/api',authRoutes)
app.use('/api',couponRoutes)
app.use('/api',doctorRoutes)


//PORT
const port = process.env.PORT || 3003

//SERVER START
app.listen(port,()=>{
    console.log(`App started at port ${port}`)
})