import React, { useState } from 'react'
import './Enrollsubjects.css'
import Home_image from '../src/assets/Home_image.jpg'
// import enroll from '../src/assets/enroll.jpg'
import Header from './Header';
import Footer from './Footer';
import './Enrollsubjects.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import examination from '../src/assets/examination.jpg'

const Enrollsubjects = () => {

  const[subject,setSubject] = useState()
  const[enrollmentkey,setEnrollmentKey] = useState()
  const[grade,setGrade] = useState()
  const[teacher,setTeacher] = useState()
  const[year,setYear] = useState()

  const navigate = useNavigate()

  const Submit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/enroll",{subject,enrollmentkey,grade,teacher,year})
    .then(result=>{
      console.log(result)
      navigate('/viewsubjects')
    })
    .catch(err=>console.log(err))

  }

  return (
    <div className='image-section'>
      <img src={Home_image} alt=""/>
      <Header/>
      <div>
       <div className='subjects'>
        <form onSubmit={Submit}>
          {/* <div className='enroll-image'>
            <img src={enroll}alt=""/> */}
          <h2>Please Enroll to the Subjects</h2>
          <div className='mb-1'>
            <label htmlFor=""className='form-label1'>Subject</label>
            <input type='text' placeholder='Enter the Subject' className='form-enroll1'
            onChange={(e)=>setSubject(e.target.value)} required/>

          </div>

          <div className='mb-2'>
            <label htmlFor=""className='form-label2'>EnrollmentKey</label>
            <input type='text' placeholder='Enter the Enrollment Key' className='form-enroll'
             onChange={(e)=>setEnrollmentKey(e.target.value)} required/>

          </div>

          <div className='mb-3'>
            <label htmlFor=""className='form-label3'>Grade</label>
            <input type='number' placeholder='Enter your Grade' className='form-enroll'
             onChange={(e)=>setGrade(e.target.value)} required/>

          </div>

          <div className='mb-4'>
            <label htmlFor="" className='form-label4'>Teacher</label>
            <input type='text' placeholder='Enter your Teacher' className='form-enroll'
             onChange={(e)=>setTeacher(e.target.value)} required/>

          </div>

          <div className='mb-5'>
            <label htmlFor=""className='form-label5'>Year</label>
            <input type='text' placeholder='Enter your exam year' className='form-enoll'
             onChange={(e)=>setYear(e.target.value)} required/>
          </div>

          <button className='btn-submit'>Submit</button>
          {/* </div> */}
        </form>

        </div>
      </div>
      <div className='footer'>
        
        <Footer/> 
       </div> 
    </div>
    
  )
}

export default Enrollsubjects;
