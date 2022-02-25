const express = require('express');
const app = express();

//this does pre-processing of the data sent from postman
app.use(express.urlencoded({extended:false})); //Middleware

let students = [
    {name:'John Wick', age: 34, department:"Computer Science"},
    {name:'me', age: 14,  department:'science'},
    {name:'janson', age: 43, deapartment: 'awesome'},
    ];

app.get('/', function(req,res){
    res.send(students);
});

app.post('/', function(req,res){
    let newStudent = req.body;
    students.push(newStudent);
    res.redirect('/'); // redirects to the GET route
});

app.listen(3000,function(){
    console.log('Server is running port 3000');
});