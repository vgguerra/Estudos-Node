import Express from 'express';
import Handlebars from 'express-handlebars';
import Sequelize from 'sequelize';

const app = Express();
const handlebars = Handlebars.create({
    defaultLayout: 'main' // Define o layout padrão
});

// Configuração
    // Template Engine
        app.engine('handlebars', handlebars.engine); // Use 'handlebars.engine' para definir a engine
        app.set('view engine', 'handlebars'); // Apenas o nome da engine como string

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postagens', 'root', 'teste123', {
    host: 'localhost',
    dialect: 'mysql'
});

// Rotas

    app.get('/postagens', (req, res) => {
        res.render('formulario')
    });

    app.post('/add',(req,res) =>{
        res.send("Formulário recebido")
    })

app.listen(8081, () => {
    console.log('Servidor rodando na URL http://localhost:8081');
});