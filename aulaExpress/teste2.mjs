import Express from "express"

const app = Express()

app.get("/",(req,res) =>{
    res.send("<h1>Olá,mundo ou Hello, World!</h1>")
})

app.listen(8080)