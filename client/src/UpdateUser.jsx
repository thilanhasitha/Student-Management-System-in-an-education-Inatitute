import React, { useState,useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Header from '../pages/Header'
import bImage from '../src/assets/Home_image.jpg'
import Footer from '../pages/Footer'

const UpdateUser = () => {
    const{id}=useParams()
    
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[grade,setGrade] = useState()
    const[phonenumber,setPhoneNumber] = useState()
    const[age,setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result)
          setName(result.data.name)
          setEmail(result.data.email)
          setGrade(result.data.grade)
          setPhoneNumber(result.data.phonenumber)
          setAge(result.data.age)

        })
        .catch(err=>console.log(err))
    },[])

    const Update = (e)=>{
        e.preventDefault();
        // Basic form validation
    if (!name.trim() || !email.trim() || !phonenumber.trim() || !grade.trim() || !age.trim()) {
        alert('Please fill out all fields');
        return}
        axios.put('http://localhost:3001/updateUser/'+id,{name,email,grade,phonenumber,age})
        .then(result=>
         {
             console.log(result)
         })
        navigate('/Users')
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
            <Header/>
      
         <form onSubmit={Update}>
            <h2>Update Student Profile</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input type="text" className='form-control' placeholder='Enter Name'
               value={name}  onChange={(e)=>setName(e.target.value)}
               pattern="[A-Za-z\s]+"
              title="Name should contain only letters and spaces"
              required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type="email" className='form-control' placeholder='Enter Email Number'
                value={email}  onChange={(e)=>setEmail(e.target.value)}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Enter a valid email address"
              required />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Grade</label>
                <input type="number" className='form-control' placeholder='Enter Grade'
                 value={grade}  onChange={(e)=>setGrade(e.target.value)}
                 required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Phone Number</label>
                <input type="number" className='form-control' placeholder='Enter Phone number'
                value={phonenumber}  onChange={(e)=>setPhoneNumber(e.target.value)}
                required/>

            </div>
            <div className='mb-2'>
                <label htmlFor=''>Age</label>
                <input type="number" className='form-control' placeholder='Enter Age'
                value={age}  onChange={(e)=>setAge(e.target.value)}
                required/>

            </div>

            <button className='btn btn-success'>Submit</button>
         </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UpdateUser;
