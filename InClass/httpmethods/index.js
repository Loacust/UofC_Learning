const express = require('express');
const app = express();

//this does pre-processing of the data sent form postman
app.use(express.urlencoded({extended: false})); //Middleware

let students = [
    {name: "John Wick", age: 34, department: "Computer Science"},
    {name: "Jennifer Lopez", age: 34, department: "Mathmatics"},
    {name: "Rose Ben", age: 23, department: "Statistics"}
];

app.post('/', function(req,res){
    let newStudent = req.body;
    students.push(newStudent);
    res.redirect([200],'/'); //redirect to the GET route
});

app.get('/',function(req,res){
    res.send(students);    
})

app.listen(3000,function(){
    console.log('Server is running port 3000');
});