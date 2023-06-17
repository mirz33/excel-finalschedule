require('dotenv').config({
    path:'./config/config.env'
});
require('./config/connection');

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const PORT = process.env.PORT || 5000;
const IndexRoute = require('./routes');

app.use(express.json());
app.use(cors());
app.use(logger('dev'))

app.use('/', IndexRoute);

app.listen(PORT, (err)=>{
    if(err) return err;
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});