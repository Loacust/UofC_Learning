var express = require('express');
var app = express();


const arithmeticFunctions = require('./arithmeticFunctions.js');






app.listen(3000,function(){
    console.log("The server is running");
});

