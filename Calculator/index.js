const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Welcome");
});

app.get("/calculator", function(req, res){
   // res.sendFile(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req, res){
    //res.send("Calculate");
    console.log(req.body);

    let num1 = Number(req.body.v1);
    let num2 = Number(req.body.v2);

    let sum = num1+num2;
    res.send("The sum of num1 and num2 :" +sum);

});

app.listen(3001, function(req, res) {
  console.log("Server is running on port no. 3001");
});



