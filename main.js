const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({"message":"Welcome to Node API"});
});

require('./route.js')(app);

app.listen(3000,function(){
    console.log("Server running on : " + 3000)
})

