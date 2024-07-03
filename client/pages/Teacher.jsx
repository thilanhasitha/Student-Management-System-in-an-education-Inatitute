import React from 'react'
import Home_image from '../src/assets/Home_image.jpg'
import Header from './Header'
import Footer from './Footer'

const Teacher = () => {
  return (
    <div>
      <Header/>
      <div className='image-section'>
        <img src={Home_image} alt=""/>
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Teacher
