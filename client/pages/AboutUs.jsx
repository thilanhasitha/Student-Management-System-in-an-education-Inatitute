import React from 'react'
import AboutUS_image from '../src/assets/AboutUS_image.jpg'
import './AboutUs.css'
import Header from './Header'
import HomeIcon from '@mui/icons-material/Home';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { colors } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Footer from './Footer';
// import Body from './body';


function AboutUs(){
  return (
    <div>
      <Header/>
    
        
    <div className='image-section1'>
       
    <img src={AboutUS_image} alt=""/>
    
     
    </div>
    <div className='story'>
      
      <div className='title' >
        <h1>About Us</h1>

      </div>

    </div>
    <div className='paragraph1'>
      <h3>Lorem ipsum dolor sit amet
         consectetur adipisicing elit.
          Eveniet magni ipsa molestiae porro 
          maxime optio ad, culpa dolorem ipsam nulla
           totam provident facilis! Ipsa velit ab aliquid dolores ducimus reprehenderit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor, quam,
            in quasi facere quas nisi rem cum officia veniam
             impedit. Maxime ipsam neque cum doloremque? Minima
              aliquam voluptatibus consequuntur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Illo, vel esse iusto tenetur hic autem architecto ipsum.
                Adipisci vel dicta minima modi saepe deserunt praesentium
                 eius! Fugit labore cum enim.</h3>

    </div>
    <div className='information'>
     <div className='details' sx={{alignProperty:'center'}}>
      <div className='address'><HomeIcon sx={{color:'#F2613F'}}/><h3 sx={{colors:'#F2613F'}}>Address :-  EdusPhere Educational Institute,Sri Lanka</h3></div>
      <div className='phone'><PhoneMissedIcon sx={{color:'#F2613F'}}/><h3 sx={{}}>Phone Number:-071-8965236 , 032-4587001</h3></div>
      <div className='email'><MailOutlineIcon sx={{color:'#F2613F'}}/><h3>Email ID :- EdusPhere@gmail.com</h3></div>
    </div>
    </div>
    {/* <Body/> */}
    <div className='footer-style'>
     <Footer/>
     </div>
    </div>
    
  )
}

export default AboutUs;
