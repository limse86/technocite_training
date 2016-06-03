let logger =require(`${process.cwd()}/server/utils/logger`);
let express = require('express');
let db = require(`${process.cwd()}/server/utils/db`);
let api = require('./api/api');
let app=express();
db.config();
app.use('/api',api);
app.use(function(err,req,res,next){
   logger.log(err.message);
   res.status(500).send('Oops server is in a bad mood !'); 
});
module.exports = app;