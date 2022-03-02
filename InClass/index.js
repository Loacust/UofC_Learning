const express = require('express');
const app = express();

//Home route
app.get('/', function(req,res){
    res.send("Hello World");
});

//About route
app.get('/about',function(req,res){
    res.send('about page');
});

//web server
app.listen(3000, function(){
    console.log('server running on port 3000');
});