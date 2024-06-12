const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({
    userId:String,
    description:String,
    amount:String,
    category:String,
    paymentMethod:String,
},{
    timestamps:true,
})

const Product=mongoose.model('Dashbord',ProductSchema);
module.exports=Product;