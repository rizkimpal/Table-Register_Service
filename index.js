const User = require("./route/User")
const express = require("express")
const dotenv = require("dotenv")
const Mongoconnect = require("./connection/mongoconnect")
// const users = require("./user/users")
const cors = require("cors")


Mongoconnect()
// const mongoose = require("mongoose")
// mongoose.connect('mongodb://localhost:27017/Control_Data') 
dotenv.config();
app = express();
app.use(cors());
app.use(express.json());

const log = async(req, res, next) => {
    req.time = new Date()
    console.log(req.time.toString())
    next()
 }

app.use(log)
app.use(User)

app.listen(process.env.PORT, () => {
    console.log('Server Running........');
})
