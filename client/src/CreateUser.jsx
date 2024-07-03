import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../pages/Header'
import bImage from '../src/assets/Home_image.jpg'
import Footer from '../pages/Footer'
import './CreateUser.css'



const CreateUser = () => {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [grade,setGrade] = useState()
    const [phonenumber,setPhoneNumber] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()
     

    const Submit = (e)=>{
       e.preventDefault();
       // Basic form validation
    if (!name.trim() || !email.trim() || !phonenumber.trim()|| !grade.trim() || !age.trim()) {
      alert('Please fill out all fields');
      return;}
    
       axios.post('http://localhost:3001/createUser',{name,email,password,grade,phonenumber,age})
       .then(result=>
        {center
            console.log(result)
        })
       navigate('/')
       .catch(err=>console.log(err))
    }

  return (
    <div className='header'>
        <Header/>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items"
    style={{
        backgroundImage:"url("+bImage+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width:'100%',
        height:'100vh',}}>

    <div className='w-50 bg-white rounded p-3'
     style={{backgroundColor:'#873AC5',
     backgroundImage:"url("+bImage+")",
     //backgroundSize: "cover",
     //backgroundPosition: "center",
     //width:'100%',
     //height:'100vh'
     }} >
         <div className='create-form'
          style={{backgroundColor:'#873AC5',
          backgroundImage:"url("+bImage+")",
          //backgroundSize: "cover",
          //backgroundPosition: "center",
          //width:'100%',
          //height:'100vh'
          }} >
         <form onSubmit = {Submit}>
          
            <h2>Add Student</h2>
            <div className='mb-2'> 
                <label htmlFor=''>Name</label>
                <input type="text" className='form-control' placeholder='Enter Name'
                onChange={(e)=>setName(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="Name should contain only letters and spaces"
                required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type="email" className='form-control' placeholder='Enter Email Number'
                  onChange={(e)=>setEmail(e.target.value)}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Enter a valid email address"
                  required/>
            </div>

             <div className='mb-2'>
                <label htmlFor=''>Password</label>
                <input type="password" className='form-control' placeholder='Enter the valid Password'
                  onChange={(e)=>setPassword(e.target.value)}
                  pattern = "^[A-Za-z0-9]{8,20}$"
                  title="Enter the valid Password"
                  required
             />      

             {/* pattern = "^[A-Za-z0-9]{8,20}" 
             ^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%]).{8,24}$*/}
            </div>

            <div className='mb-2'>
                <label htmlFor=''>Grade</label>
                <input type="number" className='form-control' placeholder='Enter Grade'
                 onChange={(e)=>setGrade(e.target.value)}
                 required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Phone Number</label>
                <input type="number" className='form-control' placeholder='Enter Phone number'
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Age</label>
                <input type="number" className='form-control' placeholder='Enter Age'
                onChange={(e)=>setAge(e.target.value)}
                required/>

            </div>

            <button className='btn btn-success'>Submit</button>
         </form>
         </div>
        </div>
        
        </div>
        <Footer/>
    </div>
    
  )
}

export default CreateUser;
