import { Box, Stack } from '@mui/material'
import React from 'react'
import img from "../image/1.png"
import img1 from "../image/like.png"
import "./style.css"
import ResponsiveAppBar from './Nav'

const Header = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Box sx={{width:"40%", padding:"2rem"}}>
     <h1>Elevate Your Brand With Creative Design Solution</h1>
     <p>Our passion for design and innovation us to deliver exceptional solutonas
       that make your brand standout in a crowd marketplace.</p>
       <Box  sx={{marginTop:"50px",width:"120px",textAlign:"center",backgroundColor:"tomato",color:"black",padding:"15px",borderRadius:"20px",fontWeight:"bold"}} >
             <span>Contact Us</span>   
            </Box>

            <Box sx={{marginTop:"50px"}}>
             <span>We have worked with</span>
             <Box sx={{display:"flex",justifyContent:"space-between"}}>
              <h1>Adobe</h1>
              <h1>Asana</h1>
              <h1>Atlassian</h1>
             </Box>
            </Box>
    </Box>

  
    </>
 
  )
}

export default Header
