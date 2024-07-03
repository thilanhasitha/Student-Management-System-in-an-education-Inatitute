import { useEffect, useState } from 'react'
import axios from 'axios'   
import Header from './Header'
import './Payment.css'
import money from '../src/assets/money.jpg'
import Footer from './Footer'

function App() {
  const [file, setFile] = useState()
  const [image,setImage] = useState()
  
  const handleUpload = ()=>{
    const formdata = new FormData()
    formdata.append('file',file)

    axios.post('http://localhost:3001/upload',formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    useEffect(()=>{
      axios.get('http://localhost:3001/getImage')
      alert("upload is successfully")
      .then(res=>setImage(res.data[2].image))
      .catch(err=>console.log(err))
  
    },[])
  }

  return (
    
      <div>
        <Header/> 
      
     <div className='image-payment'>
      <img src = {money} alt = ""/>
      <div className='sliip'>

      <h1 className='upload'>Upload your Monthly Payment Slip
      <h2>(your class teacher,your class,your grade is mention above the bank sliip )</h2> </h1>
        <div></div>
        <input type = "file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
        <br/>
        <img src={'http://localhost:3001/Images/'+image} alt=""/>
        </div>
        </div>
        <Footer/>
        </div>
       
       
       
     
     
      
        
    
  )
}

export default App

      

      
    
