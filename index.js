var http=require('http');

const express= require('express');
const app= express();
const {config} = require('./config/index');
const controllers = require('./routes/index.js');
app.use(express.json());
controllers(app);


app.listen(config.port, function(){
    console.log(`Litening http://localhost:${config.port}`);
})