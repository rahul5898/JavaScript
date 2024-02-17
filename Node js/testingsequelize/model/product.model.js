import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import cartItem from "./cartItem.model.js";
import cart from "./cart.model.js";
// const product = sequelize.define("product", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     productname: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     brand: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     price: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     categoryId: {
//         type: DataTypes.INTEGER,
//         foreignKey: true
//     }
// })

const product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type : DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
     
    },
    discountPercentage:{
        type: DataTypes.FLOAT,
     
    },
    rating:{
        type : DataTypes.FLOAT,
    },
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    categoryName: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    imageArray: DataTypes.STRING(1000)
})

product.sync()
    .then(() => {
        console.log("Product table created....");
    })
    .catch(() => {
        console.log("Something Wrong");
});



product.belongsToMany(cart,{through:cartItem});
cart.belongsToMany(product,{through:cartItem})

// product.hasMany(cartItem);
// cartItem.belongsTo(product);

export default product;