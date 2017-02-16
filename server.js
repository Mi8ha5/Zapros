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
      res.send(JSON.stringify(name));
  } );
  app.post("/zapros", jsonParser, function(req,res){
    console.log(req.body);
    var id=req.body.id;
    var name=req.body.name;
    var list = path.join(process.cwd(), 'static/list.json');
    var data=jsonfile.readFileSync(list);
    var flag;
    for(var i=0; i<data.length; i++){
      if (data[i].id===id){
        data[i].name=name;
        flag = true;
      };
    };

    if (!flag) {
      data.push(req.body);
    };

    jsonfile.writeFileSync(list,data);
    res.sendStatus(200);
  });
  app.get("/del/:id", function (req,res){
    var list = path.join(process.cwd(), 'static/list.json');
    var data=jsonfile.readFileSync(list);
    var data2= new Array();
    for (var i in data){
      if (data[i].id !== parseInt(req.params.id)){
        data2.push(data[i]);
      };
    };
    jsonfile.writeFileSync(list,data2);
    res.sendStatus(200);

  });
app.listen(8080);
