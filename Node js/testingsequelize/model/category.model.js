import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import product from "./product.model.js";
const category = sequelize.define('category',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    categoryname: {
        type : DataTypes.STRING,
        primaryKey:true
    }
})

category.hasMany(product,{
    foreignKey: 'categoryName'
})

product.belongsTo(category,{
    foreignKey: 'categoryName', targetKey: 'categoryname'
})


category.sync()
.then(()=>{
    console.log("Category table created"); 
})
.catch(()=>{
    console.log("Something went wrong");
})

// category.hasMany(product,{
//     foreignKey:'categoryId',
// });

// product.belongsTo(category,{
//     foreignKey:'categoryId',
//     onDelete: 'CASCADE'
// })

export default category;