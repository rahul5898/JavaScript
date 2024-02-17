import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import cartItem from "./cartItem.model.js";
const cart = sequelize.define("cart",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId:{
        type: DataTypes.INTEGER,
        foreignKey: true,
    }
})

cart.sync()
.then(()=>{
    console.log("cart table created....");
})
.catch(()=>{
    console.log("Something wrong");
})

cart.hasMany(cartItem,{
    foreignKey: 'cartId',
    onDelete:'CASCADE'
})

cartItem.belongsTo(cart,{
    foreignKey: 'cartId',
    onDelete: 'CASCADE'
})

export default cart; 