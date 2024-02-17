import { DataTypes } from 'sequelize'
import connection from '../dbconnection/connection.js'
import bcrypt from 'bcryptjs'
import cart from './cart.model.js'

const user = connection.define('user',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    email: {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
            let saltkey = bcrypt.genSaltSync(10);
            let encryptedpassword = bcrypt.hashSync(value,saltkey);
            this.setDataValue("password",encryptedpassword);
        }
    }

})

user.checkPassword = (originalPassword,encryptedpassword)=>{
    console.log("checkPassword called....");
    return bcrypt.compareSync(originalPassword,encryptedpassword);
}

connection.sync()
.then(()=>{

})
.catch(err=>{
    console.log(err);
    console.log("Something wrong");
})

user.hasOne(cart,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

cart.belongsTo(user,{
    foreignKey: "userId",
    onDelete: 'CASCADE'
})


export default user;