import Sequelize, { DataTypes } from 'sequelize';

const sequelize = new Sequelize('teste', 'root','teste123',{
    host: "localhost",
    dialect: 'mysql'
})

const Usuario = sequelize.define('usuarios',{
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  senha:{
    type: DataTypes.STRING,
    allowNull:false,
  }
})

Usuario.create({
  nome:"Victor2 Evandro2 de2 Lima Guerra",
  email: "2@gmail.com",
  senha:"Teste1213"
})



// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conectado com sucesso');
  })
  .catch((error) => {
    console.error('Falha ao se conectar: ', error);
  });

