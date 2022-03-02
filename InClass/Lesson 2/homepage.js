var express= require('express');
var app = express();

function custom_middleware(req,res,next){
    console.log('I AM WORKING FINE');
    next();
} 
app.use(custom_middleware);

app.get('/',function(req,res){
    res.send('Welcome to the Homepage');
})

app.listen(3000, function(){
    console.log('The server is on');
});
