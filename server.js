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
  var inf=JSON.parse(data)
  console.log(inf.name);
  res.send(inf.name);

} );
app.listen(8080);
