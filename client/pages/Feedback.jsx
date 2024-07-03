import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
//import'./feedback.css'
import Footer from './Footer'
import bImage from '../src/assets/Home_image.jpg'

const Feedback = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [grade,setGrade] = useState()
    const [message,setMessage] = useState()

    const navigate = useNavigate()

    const Submit = (e)=>{
       e.preventDefault();
       // Basic form validation
     if (!name.trim() || !email.trim() || !grade.trim() || !message.trim() ) {
         alert('Please fill out all fields');
         return;}
       axios.post('http://localhost:3001/feedback',{name,email,grade,message})
       .then(result=>
        {
            console.log(result)
            navigate('/')
        })
      
       .catch(err=>console.log(err))
    }

  return (
    <div>
     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"
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
        <div className='image-feedback'>
         <img src={Feedback} alt=""/>
        </div>
    
            <Header/>
            
          <form onSubmit = {Submit}>
             <h2>Add Feedback</h2>
            <div className='mb-feedback'>
                <label htmlFor=''>Name</label>
                <input type="text" className='form-control' placeholder='Enter Name'
                onChange={(e)=>setName(e.target.value)}
                 pattern="[A-Za-z\s]+"
                 title="Name should contain only letters and spaces"
                   required
                  />
                </div>
             <div className='mb-feedback1'>
                <label htmlFor=''>Email</label>
                <input type="email" className='form-control' placeholder='Enter Email Number'
                  onChange={(e)=>setEmail(e.target.value)}
                   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                   title="Enter a valid email address"
                   required
                  />
            </div> 
            <div className='mb-feedback2'>
                <label htmlFor=''>Grade</label>
                <input type="number" className='form-control' placeholder='Enter Grade'
                 onChange={(e)=>setGrade(e.target.value)}
                  required
                 />

            </div>
             <div className='mb-feedback3'>
                <label htmlFor=''>Message</label>
                <input type="text" className='form-control' placeholder='Enter Feedback Message'
                onChange={(e)=>setMessage(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="Name should contain only letters and spaces"
                  required
                
               />

            </div> 
            
             <button className='btn btn-success'>Submit</button> 
         </form>
          
          
        </div> 
        
        </div>
        <Footer/>
      </div>
        
  )
}

export default Feedback;
