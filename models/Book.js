const mongoose =require('mongoose')

const BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    publishedBy:String,
})

module.exports = mongoose.model('book', BookSchema)