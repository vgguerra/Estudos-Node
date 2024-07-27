const express = require("express")
const app = express()


app.get("/sobre",function(req,res){
    res.send("Bem vindo a página \"SOBRE\"");
})

app.get("/blog",function(req,res){
    res.send("Bem vindo a página \"Blog\"");
})

app.get("/ola/:nome",function(req,res){
    res.send("Olá " + req.params.nome + "<h1>Olá, again</h1>" + req.params.nome + "Teste")
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send(req.params)
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/HTMl/index.html");
})






app.listen(3001,function(){
    console.log("Servidor rodando na url http://localhost:3001")
})