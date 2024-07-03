const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({

   name:String,
   email:String,
   grade:Number,
   message:String,

})

const FeedbackModel = mongoose.model("feedbacks",FeedbackSchema)
module.exports = FeedbackModel;