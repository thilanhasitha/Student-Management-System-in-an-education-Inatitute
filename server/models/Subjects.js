const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({

    subject:String,
    enrollmentkey:String,
    grade:Number,
    teacher:String,
    year:Number,

})

const SubjectModel = mongoose.model("subjects",SubjectSchema)
module.exports = SubjectModel;