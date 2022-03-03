const express = require('express');
const app = express();
express.urlencoded({extended:false});
app.use(express.json());

const students = [
    {id:101 ,Fname:'Jack', Lname:'The Ripper', age:213},
    {id:323 ,Fname:'Lucy', Lname:'Diamonds', age:43},
    {id:232 ,Fname:'Fred', Lname:'Thestair', age:34},
    {id:343 ,Fname:'Alana', Lname:'Prosper', age:12}
];

app.post('/student/add_student',function(req,res){
    const student1 = {
        id: req.body.id,
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        age: req.body.age,
    };
students.push(student1);
res.status(200).send(student1);
});



app.listen(3000,function(res,req){
    console.log('The server is running')
});