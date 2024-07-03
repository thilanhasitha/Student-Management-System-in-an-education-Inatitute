import { useState } from 'react'
import './App.css'
import{BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users from './Users'
import Home from '../pages/Home'
// import  from '../pages/Teacher/Teacher'
import Feedback from '../pages/Feedback'
//import Examination from '../pages/Enrollsubjects'
import AboutUs from '../pages/AboutUs'
import Payment from '../pages/Payment'
import Search from '../pages/Search'
import Footer from '../pages/Footer'
import Enrollsubjects from '../pages/Enrollsubjects'
import Viewsubjects from '../pages/Viewsubjects'
import Examination from '../pages/Examination'
import Support from '../pages/Support'
import Teacher from '../pages/Teacher'







function App() {
  
  

  return (
  <div>
     
  
    <div>
       
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/users'element={<Users/>}/>
        <Route path ='/create'element={<CreateUser/>}/>
        <Route path ='/update/:id' element={<UpdateUser/>}/>
        <Route path ='/feedback' element={<Feedback/>}/>
        <Route path = '/enrollsubjects' element={<Enrollsubjects/>}/>
        <Route path = '/viewsubjects' element={<Viewsubjects/>}/>
        <Route path ='/examination' element={<Examination/>}/>
        <Route path = '/support' element={<Support/>}/>
         <Route path ='/teacher' element={<Teacher/>}/>
        <Route path = '/aboutus' element={<AboutUs/>}/>
        <Route path ='/payment' element={<Payment/>}/>
        <Route path ='/search' element={<Search/>}/>
        <Route path ='footer' element={<Footer/>}/>
        
      </Routes>
     </BrowserRouter>
    </div>
  </div>
  )   
}

export default App;
