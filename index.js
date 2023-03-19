const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())
//-------------mongodb------------------------

const uri = process.env.MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true}).then(()=>{console.log("connected to database")}).catch(e=>{console.log(e)})
//------------------------------------------

require('./model')
const User = mongoose.model("books")
app.use(bodyParser.json())

app.post('/addbook',async (req,res)=>{
    const { author_name, description, book_title, price} = req.body
    try{
        await User.create({
            author_name,
            description,
            book_title,
            price,
        });
        res.json({status: 1})
    }catch(error){
        console.log(error)
        res.json({status: 0})
    }
    
})

app.get('/books',(req,res)=>{
    let  data = User.find().then(data=>{res.send(data)}).catch(err=>{res.send({status : 0})}) 

})
app.get('/singlebook/:id',(req,res)=>{
    let id = req.params.id;
    let  data = User.find({_id : id}).then(data=>{res.send(data)}).catch(err=>{res.send({status : 0})}) 
})
app.delete('/delete/:id',(req,res)=>{
    let id = req.params.id;
    let  data = User.deleteOne({_id : id}).then(()=>{res.send({success:1})}).catch(err=>{res.send({success : 0})}) 
})
app.patch('/edit/:id',async (req,res)=>{
    let id = req.params.id;
    const { author_name, description, book_title, price} = req.body
    try{
        await User.updateOne({_id : id},{
            author_name,
            description,
            book_title,
            price,
        });
        res.json({status: 1})
    }catch(error){
        console.log(error)
        res.json({status: 0})
    }
})
<<<<<<< HEAD
app.listen()
=======
app.listen()
>>>>>>> d9198b8c8d66f96e2c28318ca9b65925fb461541
