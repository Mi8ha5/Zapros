var express=require("express");
var app=express();
var BodyParser=require("body-parser");
var jsonParser=BodyParser.json();
var fs=require("fs");
var path=require("path");
var jsonfile=require("jsonfile");

app.get("/name", function(req,res){
  var list = path.join(process.cwd(), 'static/list.json');
  var data=jsonfile.readFileSync(list);
  var name="";
  for(var i in data){
    console.log(data[i].name);
    name+=" "+data[i].name;
      };
      res.send(name);
  } );
app.listen(8080);
