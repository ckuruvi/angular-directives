var express= require('express');
var path=require('path');
var bodyParser=require('body-parser');

var cors=require("cors");

var employees= require('./routes/employees');
var sum=require('./routes/sum');


var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));


app.use("/Sum",sum);
app.use("/employees",employees);

app.get('/*',function(req,res){

  res.sendFile(path.join(__dirname,'public/view/index.html'));
})

var server=app.listen(3000, function(){
  console.log('listening to port',server.address().port);
});
