import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";

const cartItem = sequelize.define("cartItem",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    cartId:{
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    productId:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull : true
    },
    quantity:{
        type : DataTypes.INTEGER,
        set(value){
            if(value==null){

                this.setDataValue()
            }
            // defaultvalue: 1
        this.setDataValue("quantity",value)
        }
    }
})

cartItem.sync()
.then(()=>{
    console.log("CartItem table created....");
})
.catch(()=>{
    console.log("Something wrong");
})


export default cartItem;