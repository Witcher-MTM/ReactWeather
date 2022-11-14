const express = require("express");
const app = express();

app.get("/connect",function(req,res){
    res.json({connected:"Connect!"});
});

module.exports = app;