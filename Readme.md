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

# Aula 10 - Carregando um arquivo HTML
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

<br>
<br>

# Aula 11 - Iniciando o uso do MySQL

No momento da configuração do MySQL, devemos escolher o tipo de configuração, entre as seguintes opções:

![Tipos de Configuração](imagens/Captura%20de%20tela%202024-07-27%20091326.png);

>**Dedicated Machine** : É recomendado para computador que apenas vão rodar o MySQL e mais nada. Esta configuração, irá permitir ao MySQL utilizar 100% de sua CPU e de sua memória RAM por exemplo. Usado normalmente por empresas.

>**Server Computer** : É usado por hospedagens WEB. Neste tipo de configuração, o desempenho é dividido, onde metade é para o banco de dados e a outra metade é para o resto.

>**Development Computer** : Indica que é uma máquina de desenvolvimento, apenas eu irei acessa-la durante o desenvolvimento, então o MySQL utiliza o mínimo possível. 

 Assim como o Node, o MySQL também é uma ferramenta de linha de comando, porém, precisa ser linkado ao cmder(no windowns) para funcionar, pois não é algo feito automaticamente. Para fazer isso, basta abrir as configurações de variáveis de ambiente e adicionar o caminho da pasta bin do MySQL que foi instalado em sua máquina.
<br>
<br>

 # Aula 12 -  Criando tabelas em MySQL

1. O primeiro passo é se conectar ao nosso servidor que criamos conforme especificado na seção [Aula 11](#aula-11---iniciando-o-uso-do-mysql).
Para fazer isso, vamos abrir o cmd(ou terminal), e iremos digitar
````bash
mysql -h {servidor que eu quero me conectar} -u {usuário} -p
````

O servidor, em nosso caso, será o localhost, e o usuário o root com a senha definida no momento de configuração do MySQL.

## Mostrando meus bancos de dados
Para mostar todos os bancos de dados que tem no momento usa-se o seguinte comando
````bash
show databases;
````

## Criando e acessando um banco de dados

Para criar um novo banco de dados e acessa-lo usa-se os seguintes comando:
````bash
create databases {nome_do_banco_de_dados};
````
Acessando o DB: 


````bash
use {nome_do_banco_de_dados};
````
---
## Criando tabelas para o banco de dados

Para criar uma tabela em nosso banco de dados, vamos utilizar o seguinte comando:

````sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    nome VARCHAR(50) NOT NULL,        

    email VARCHAR(100) NOT NULL UNIQUE,

    idade INT
    );
````

Para visualizar sua tabela pelo terminal, basta digitar o comando
````bash
show tables;

describe {nom_tabela};
````

<br>
<br>


# Aula 13 - Como inserir dados na tabela

Para inserir dados em sua tabela, deve-se utilizar a sintaxe da seguinte forma:
````bash
INSERT INTO {nome_tabela}(valor1,valor2,valor2) VALUE(
    "Equivalente valor1",
    "Equivalente valor2",
    "Equivalente valor3"
);
````

## Imprimindo os valores da tabela

1. Imprimindo todos

````bash
SELECT * FROM nome_tabela
````
>**OBSERVAÇÃO**: O "\*" serve para dizer que quermos todos os valores dentro da tabela

2. Imprimindo especificamente
````bash
SELECT * FROM nome_tabela WHERE idade = 8; 
````
Neste caso, o mySQL irá retornar apenas os usuários que tem a **idade** igual a 8. 
<br>
<br>

# Aula 14 - Deletando registros no MySQL

Para deletar um registro em sua tabela, usamos o comando `DELETE`:
````bash
DELETE FROM _nome_table WHERE nome = value
````
>**CUIDADO** : Se o comando `DELETE` for utlizado sozinho, sem o `WHERE`, desta forma => `DELETE FROM _name_table` <= toda a sua tabela será apagado. 

<br>
<br>

# Aula 15 - Atulizando dados no banco de dados

````bash
UPDATE _name_table SET nome = "Novo nome" WHERE nome = "Nome antigo"
````

>**CUIDADO** : Assim como o `DELETE`, não use este comando sem o `WHERE`.

<br>
<br>

# Sequelize
    O **Sequelize** é uma biblioteca par Node.JS que facilita a interação com bancos de dados relacionais como MySQL, PostgreSQL, SQLite e SQL Server. Ele permite que você trabalhe com bancos de dados usando objetos JavaScript, sem precisar escrever manualmente consultas SQL complexas. O Sequelize abstrai o banco de dados, fornecendo uma API de alto nível para gerenciar a persistência de dados.
- [Documentação do sequelize](https://sequelize.org)
 
Para utilizar o mySQL e o sequelize em seu projeto Node.js, inicie dentro da pasta de seu projeto como dependências o `mysql2` e o `sequelize` com o comando:

```bash
λ npm install --save sequelize
λ npm install --save mysql2
```

O sequelize irá facilitar muito a forma de como fazemos a criação de tabelas, inserção, delete, etc.

### Como se conectar ao seu banco de dados MySQL utilizando o sequelize?
Para se conectar ao banco de dados com o sequelize, usamos a seguinte chamada

#### Forma 1
```JavaScript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root','teste123',{
    host: "localhost",
    dialect: 'mysql'
})
```
**OU** <br>
#### Forma 2
```JavaScript 
import Sequelize from 'sequelize';

const sequelize = new Sequelize('teste', 'root','teste123',{
    host: "localhost",
    dialect: 'mysql'
})
```

>**OBS** : Caso seja utilizado [Forma2](#forma-2), você deverá habilitar ES6 Modules no Node.js. Para isso, altere o nome de seu arquivo de `.js` para `.mjs` e adicionar o `export default sequelize;` ao final do código.


Na chamada do `new Sequelize` os parâmetros são:
    
    1. O nome do banco de dados que será utilizado
    2. O usuário que você utiliza para se conectar ao MySQL
    3. A senha do seu usuário para se conectar ao MySQL
    4. Um objeto json que irá ser passado:
        4.1 - O "servidor" onde está rodando o mySQL
        4.2 - Qual o tipo de banco de dados que você quer se conectar, em nosso caso, MySQL

# Aula 18 - Models no Sequelize

Criar um moodel no `Sequelize` nada mais é do que criar uma tabela em seu banco de dados. A criação de um model é feita da seguinte forma:

````JavaScript
const Postagem = sequelize.define('postagens',{
    id: {
        PRIMARY
    }
  titulo: {
    type: sequelize.STRING
  },
  conteudo:{
    type: sequelize.TEXT
  }
}) 

Postagem.sync({force:true})
````

Onde os parâmetros são reespectivamente:

    1. Nome da tabela
    2. Um objeto json, que irá receber os campos de nosso tabela

### O que signfica a linha "Postagem.sync({force: true})"

    O método sync no Sequelize é responsável por garantir que os modelos definidos no código estejam sincronizados com o banco de dados, ou seja, ele cria as tabelas necessárias, incluindo colunas e chaves de acordo com a definição do modelo.

    Uso do Método sync
    sync(): Cria a tabela se ela não existir. Se a tabela já existir, não faz nenhuma alteração.

    sync({ force: true }): Força a recriação da tabela, deletando a tabela existente e criando uma nova. Isso significa que todos os dados na tabela serão apagados.

    sync({ alter: true }): Ajusta a tabela existente para se adequar ao modelo, sem deletar a tabela ou perder dados.
<br>

## Inserindo dados dentro do bando de dados

A inserção de um dado dentro de seu banco de dados é feita da seguinte forma:

 ````JavaScript
  Usuario.create({
  nome:"Victor Guerra",
  email: "testeGuerra@gmail.com",
  senha:"Teste123"
  })
  ```` 