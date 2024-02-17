import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import product from "./product.model.js";
import order from "./order.model.js";

const orderitem = sequelize.define(orderitem,{
    id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references:{
            model: product,
            key: 'id'
        }
    },
    Quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references:{
            model: order,
            key: 'id'
        }
    }

})