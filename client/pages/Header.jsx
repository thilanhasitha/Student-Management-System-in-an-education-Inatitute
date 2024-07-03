import React,{useState}from 'react'
import {AppBar,Button,Tab, Tabs, Toolbar, Typography} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';




const Header = () => {
  

  const[value,setValue] = useState();
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{background:'#A79277'}}>
          <Toolbar>
          <SchoolIcon/>

          <Typography>EdusPhere</Typography>
          <Tabs textColor='inherit'value={value}
          onChange={(e,value)=>setValue(value)}
          indicatorColor='secondary'>

           <Link to="/"><Tab sx={{marginLeft:'10px',color:'#ffffff'}} label="Home"/></Link>
           <Link to="/enrollsubjects"><Tab sx={{marginLeft:'14px',color:'#ffffff'}} label="Enroll Subjects"/></Link>
           {/* <Link to ="/teacher"><Tab sx={{marginLeft:'60px',color:'#ffffff'}} label="Teacher"/></Link> */}
           <Link to="/feedback"><Tab sx={{marginLeft:'18px',color:'#ffffff'}} label="Feedback"/></Link>
           <Link to="/teacher"><Tab sx={{marginLeft:'22px',color:'#ffffff'}} label="Teacher"/></Link>
           <Link to="/examination"><Tab sx={{marginLeft:'26px',color:'#ffffff'}} label="Examination"/></Link>
           <Link to="/support"><Tab sx={{marginLeft:'30px',color:'#ffffff'}} label="Support"/></Link>
           <Link to="/aboutus"><Tab sx={{marginLeft:'34px',color:'#ffffff'}} label="About Us"/></Link> 
           <Link to="/payment"><Tab sx={{marginLeft:'36px',color:'#ffffff'}} label="Payment"/></Link>
           <Link to="/search"><Tab sx={{marginLeft:'10px',color:'#ffffff'}} label="Search Teachers"/></Link>
           
          
          </Tabs>
          <Link to="/users"><Button sx={{marginLeft:'30px'}}variant='contained'
          onClick={()=>navigate('/users')}>Profile</Button></Link>

          <Link to="/create"><Button sx={{marginLeft:'25px'}}variant='contained'
          onClick={()=>navigate('/create')}>Register</Button></Link>
          
          </Toolbar>
        </AppBar>
      </React.Fragment>
      
    </div>
  )
}

export default Header;
