const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    name:String,
    email:String,
    quest:String,
    date:Date

})

module.exports = mongoose.models.Question || mongoose.model("Question", QuestionSchema)