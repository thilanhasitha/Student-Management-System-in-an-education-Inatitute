import React from 'react'
import Home_image from '../src/assets/Home_image.jpg'
import './Home.css'
import Header from './Header'
import location from '../src/assets/location.jpg'
import Footer from './Footer'



const Home = () => {
  return (
    <div className='Header'spacing={2}>
      <Header/>
     
    
    
    <div className='image-section'>
       
    <img src={Home_image} alt=""/>
    
   
    
    <div className='paragraph' spacing ={2}>
    <div className='future'><h2>The Future</h2></div>
    <h4>We are a leading non-state higher education
       institute approved by the University Grants 
       Commission (UGC) under the Universities Act.
        We are members of the Association of Commonwealth 
        Universities (ACU), as well as the International Association 
        of Universities (IAU). We are also the first Sri Lankan institute
         to be accredited by the Institute of Engineering & Technology( IET), UK
          and Engineering Council, UK.</h4>
          </div>
          <div className='image-location'>
            <img src={location} alt=""/>

          </div>
          </div>
          <Footer/>
          </div>
    
            
          
            
    
  )
}

export default Home;
