import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../pages/Header'
import bImage from '../src/assets/Home_image.jpg'
import Footer from '../pages/Footer'
import './Users.css'

const Users = () => {
    const[users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err =>console.log(err))
    },[])
    const handleDelete = (id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"
    style={{backgroundImage:"url("+bImage+")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width:'100%',
            height:'100vh'}}>

      {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.5 }}></div> */}
        <div className='w-50 bg-white rounded p-3'
          style={{backgroundColor:'#873AC5',
          backgroundImage:"url("+bImage+")",
          //backgroundSize: "cover",
          //backgroundPosition: "center",
          //width:'100%',
          //height:'100vh'
          }}>
            <Header/>  
            {/* <Link to = "/create"className='btn btn-success'>Add Student</Link> */}
            <table className='table'>
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Grade</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
               </thead>
               <tbody>
                {
                    users.map((user)=>{
                             
                         return<tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.grade}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to = {`/update/${user._id}`} className='btn btn-success'>Update</Link>
                           <button className='btn delete'
                           onClick={(e)=>handleDelete(user._id)}
                           >Delete</button>
                            </td>
                        </tr>
                    })
                }
               </tbody>
            </table>

        </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}

export default Users;
