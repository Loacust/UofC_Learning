const express = require('express')
const sequelize = require('./configuration/config')
const app = express()
const student = require('./student')
const mysql = require('mysql')
let x = 0

app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('Request Type:', req.method);
    x = x+1;
    console.log(`Request #: ${x}`);
    next()
  })

/*let conn = mysql.createConnection({
    host: 'localhost',
    User: 'root',
    Password: 'password22669',
    Database: 'studentdata'
});*/

sequelize.sync().then(function(result){
   console.log(result);
   }).catch((err)=>{console.log(err);});

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

app.get('/', function(req,res){
    student.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
       res.send(err);
    });
});
app.post('/', function(req,res){
    student.create(req.body).then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    })
});
app.get('/:id',function(req, res){
    let ID = req.params.id;
    student.findByPk(ID).then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    })
});

app.patch('/:id', function(req,res){
    let ID = req.params.id;
    
    student.findByPk(ID).then(function(result){
        
        if (result) {
            result.name = req.body.name;
            result.save().then(function(req,res){
                res.redirect('/');
            }).catch(function(err){
                res.send(err);
            });
        }    
        else { 
            res.send('Record not found');
        }

    })
})

app.delete('/:id', function(req,res){
        let ID = req.params.id;

        student.findByPk(ID).then(function(result){

            if(result){
                result.destroy();
                result.save().then(function(req,res){
                    res.redirect('./.');
                }).catch(function(err){
                    res.send(err);
                });
            }
            else { 
                res.send('Record not found')
            };
        });
});    

app.listen(3000, ()=>{console.log('listening to port 3000')});