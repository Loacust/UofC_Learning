const express = require('express');
const app = express();
const myModule = require('./myModule');

app.get('/', function(req,res){
    let str = myModule.formatName("John", "Wick");
    res.send(str);
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
});