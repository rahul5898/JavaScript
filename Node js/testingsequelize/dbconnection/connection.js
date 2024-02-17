import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Sequelizedb','root','root',{
    host : 'localhost',
    dialect: 'mysql',
    timezone: '+5:30'
})

sequelize.authenticate()
.then(()=>{
    console.log("Database Connection...");
})
.catch(()=>{
    console.log("Database Connection Failed...");
})

export default sequelize;