const express = require('express');
const app = express();

const people = [
    {Fname:'Jack', Lname:'The Ripper', age:'213'}
    {}
]

app.listen(3000,function(res,req){
    console.log('The server is running')
});