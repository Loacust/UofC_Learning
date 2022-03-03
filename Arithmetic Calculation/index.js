var express = require('express');
var app = express();
app.use(express.urlencoded({extended: false}));
var arithmeticFunctions = require('./arithmeticFunctions.js');
var require = function(path){
    return module.exports;
};



let operationValues = [
    {sum: true,value_1:9,value_2: 2 },
    {sub: true,value_1: 11,value_2:4 },
    {divide:true,value_1:7,value_2: 5 },
    {multiply:true,value_1:25,value_2: 28 } 
    
];


app.post('/',function(req , res){
    let newOperations = req.body;// if you only wanted the operation you would put req.body.operation
    operationValues.push(newOperations);
    res.redirect('/'); //send you back to the get route in order to redisplay with the additional info
});

app.get('/',function(req, res){
    res.send(operationValues);
});

app.listen(3000,function(){
    console.log("The server is running");
});
var sum = operationValues[0].sum;
var sumvalue_1 = operationValues[0].value_1;
var sumvalue_2 = operationValues[0].value_2;

var sub = operationValues[1].sub;
var subvalue_1 = operationValues[1].value_1;
var subvalue_2 = operationValues[1].value_2;

var divide = operationValues[2].divide;
var divvalue_1 = operationValues[2].value_1;
var divvalue_2 = operationValues[2].value_2;

var multiply = operationValues[3].multiply;
var multivalue_1 = operationValues[3].value_1;
var multivalue_2 = operationValues[3].value_2;

if (sum == true){
    var addition = arithmeticFunctions.sum(sumvalue_1,sumvalue_2);
    console.log(addition)};
if (sub == true){
    var subtraction = arithmeticFunctions.sub(subvalue_1,subvalue_2);
    console.log(subtraction)};
if (multiply == true){
    var multiplication = arithmeticFunctions.multiply(multivalue_1,multivalue_2);
    console.log(multiplication)};
if (divide == true){
    var division = arithmeticFunctions.divide(divvalue_1,divvalue_2);
    console.log(division)};
