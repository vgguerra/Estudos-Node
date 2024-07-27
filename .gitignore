# Aula 07 - rotas
## Como chamar o módulo express:
 Para chamar o módulo `express`, utilizamos normalmente a seguinte linha:
#### Node.JS
```javascript
    const express = require("express");

    const app = express();
```

Para abrir um servidor com `express`, você irá utilizar a seguinte chamada:
#### Node.JS
```JavaScript
app.listen("8080");
```
 O parâmetro obrigatório é a porta onde o seu programa irá rodar.

 Nesta função `listen` também normalmente chamamos uma função de call back

 #### Node.js
```JavaScript
app.listen("8080",function(){
    console.log("Servidor rodando na porta ${Porta}");
});
```

> **Observação:** Lembre-se sempre de que a função `app.listen` sempre deve ser a última a ser chamada, após realizar todo o código de sua aplicação.

Porém, ao tentar abrir esta URL em seu navegador desta forma, sua aplicação irá apresentar um erro. Isso irá se dar por conta de que sua aplicatação ainda não tem nenhuma rota definida.

## O que é uma rota?
Uma rota, basicamente é um caminho para sua aplicação

Para definir a rota principal de sua aplicação, utiliza-se o seguinte comando:

#### Node.JS
````JavaScript
app.get("/",function(req,res){
    res.send("Olá, mundo!");
})
````

No exemplo acima, estamos criando uma rota para a nosso página "principal", na qual a url seria `localhost:3001\` , que é o equivalente a `localhost:3001`

> **Observação:** Dentro da function utilizada, os parâmetros `req` e `res`, reespectivamente são parâmetros de requisição e de resposta. No exemplo dado, estamos utilizando o parâmetro de resposta, com a função `send`, que "envia" uma mensagem para o servidor.

Caso ainda não tenha ficado claro, no exemplo abaixo, estamos utilizando o conceito de definir uma rota para a página `localhost:3001\sobre` e imprimindo na tela a mensagem de bem-vindo :

#### Node.JS
````JavaScript
app.get("/sobre",function(req,res){
    res.send("Bem vindo a página \"SOBRE\"");
})
````

# Aula 08 - Parâmetros em rotas

### Como passar uma parâmetro em uma rota?

Para passar um parâmtro em uma rota, bata, após digitar sua rotar, incluir um `/: + {parâmetro}`, conforme o exemplo abaixo:
#### Node.JS
````JavaScript
app.get("/ola/:cargo/:nome",function(req,res){
    res.send(req.params)
})
````

Desta forma, seu navegador, ao abrir sua rota definida, irá imprimir da seguinte forma ao abrir o navegador na rota `localhost/ola/programador/predo`:
    <span style="color: #0EB5E3">Cargo:</span>
    <span style="color:pink">"Programador"</span>
    <br>
    <span style="color: #0EB5E3">Nome:</span>
    <span style="color:pink">"Pedro"</span>

Neste caso, o que está ocorrendo, é que no momento em que o usuário digita os parâmetros na URL, o mesmo está enviando estes dados através de uma requisição ``http`` para o servidor node.

> **Observação:** Caso tenha interesse em chamar apenas um dos parâmetros, pode ser utilizado da seguinte forma: `req.params.{nome do parâmetro}` .

> **Observação 2:** Dentro de uma função de uma rota, só é possível enviar um `send`. Ou seja, o seguinte trecho de código estaria incorreto:
````JavaScript
res.send("Ola");
res.sendo("Mundo");
````

# Aula 09 - Carregando um arquivo HTML
Para carregar um arquivo `HTML` para sua rota no momento em que iniciar seu servidor, deve-ser realizar da seguinte forma para a seguinte situação:

````bash
.
|--CSS
|--HTML
    |--index.html
app.js
````

````javascript
app.get("localhost:3001/",function(req,res){
    res.sendFile(__dirname + "/HTML/index.html");
})
````
> **Observação:**
A tag `__dirname` irá retornar o caminho absoluto da aplicação, o que irá nos auxiliar a evitiar erro futuros.
