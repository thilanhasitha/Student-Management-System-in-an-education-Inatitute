const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const SubjectModel = require('./models/Subjects')
const FeedbackModel = require('./models/feedback')
//const Paymentmodel = require('./models/Payment')
const multer = require('multer')

const app = express()


app.use(cors())
app.use(express.json())
//app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/crud")

const storage = multer.diskStorage({
  destination : function(req,file,cb){
    return cb(null,"./public/Images")
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage})

app.post('/upload',upload.single('file'),(req,res)=>{
 console.log(req.body)
 console.log(req.file)
})


app.get('/',(req,res)=>{
  UserModel.find({})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
  const id= req.params.id;
  UserModel.findById({id})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))

})
app.put('/updateUser/:id',(req,res)=>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    grade:req.body.grade,
    phonenumber:req.body.phonenumber,
    age:req.body.age,
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res=>res.json(res))
    .catch(err=>res.json(err))

})

app.post("/createUser",(req,res)=>{
  UserModel.create(req.body)
  .then(users=>res.json(users))
  .catch(err=>res.json(err))

})


app.get('/viewsubjects',(req,res)=>{
  SubjectModel.find({})
  .then(subjects=>res.json(subjects))
  .catch(err=>res.json(err))
})

app.post("/enroll",(req,res)=>{
  SubjectModel.create(req.body)
  .then(subjects=>res.json(subjects))
  .catch(err=>res.json(err))
})

app.post("/feedback",(req,res)=>{
  FeedbackModel.create(req.body)
  .then(feedbacks=>res.json(feedback))
  .catch(err=>res.json(err))
})




app.listen(3001,()=>{
    console.log('server is Running')
})