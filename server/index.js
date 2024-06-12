const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const Product = require('./models/ModeSchema');
app.get('/get/product/', async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product);
    } catch (error) {

        console.log(error);


    }
})
app.get('/getbyuser/:id', async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id)
        res.send(product);
    } catch (error) {
        console.log(error)

    }
})
app.post('/new/product/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(error)
    }
})
app.delete('/delete/:id',async(req,res)=>{
    try {
        const product = req.body.id;
        const deletedProduct = await Product.deleteOne(product);
        res.send(deletedProduct);
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect('mongodb+srv://gloop216:t6OwXxDJu1KR9YA3@cluster0.nryicsp.mongodb.net/Dashboard?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('connecting ok! with db')
})
const port = 8000;
app.listen(port, () => {
    console.log(`server run with port ${port}`)
})