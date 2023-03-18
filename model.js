
const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
        author_name :{type : String, required : true},
        description:{type : String, required : true},
        book_title:{type : String, required : true},
        price:{type : String, required : true},
    },
    {collection :'books'}
)
const model = mongoose.model('books',User)