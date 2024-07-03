import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import bImage from  '../src/assets/Home_image.jpg'


// import Header from '../Header'
// import teachers from '../src/assets/teachers'


const Search = () => {
    const[data,setData] = useState([])
    const[records,setRecords] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)  
            setRecords(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    const Filter = (event)=>{
        setRecords(data.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    }
  return (
         <div>
            <Header/>
            <div className='search' >

            <div className='p-5 bg-light'style={{backgroundImage:"url("+bImage+")"}}>
              <div className='bg-white shadow border' >
   
            <input type='text' className='form-control'onChange={Filter} placeholder='search'/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
        </div>
       
    </div>
      <Footer/> 
    </div> 
   


  )
}

export default Search;



