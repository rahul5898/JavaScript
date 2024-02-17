import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import user from "./user.model.js";

const order  = sequelize.define('order',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    datatime:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: user,
            key: 'id'
        }
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usercontact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        set(value){
            defaultvalue:'pending'
        }
    }
})

order.sync()
.then(()=>{
    console.log("Order table created...");
})
.catch(()=>{
    console.log('somthing wrong');
})



export default order;