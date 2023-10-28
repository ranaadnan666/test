import { Box } from '@mui/material'
import React from 'react'
import RecipeReviewCard from './Card'

const Services = () => {
  return (
    <div style={{padding:"2rem"}}>
     <span>Services</span>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
    <h1>Our Services</h1> 
    <p>Need a custome service? just talk with us!</p>
    </Box>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
    <p style={{width:"40%"}}>We offer a cumprehensive suite of design services
         tailored too meet the unique needs of your business.</p> 
    <Box sx={{height:"25px",backgroundColor:"tomato",color:"black",padding:"15px",borderRadius:"20px",fontWeight:"bold"}} >
             <span>Contact Us</span>   
            </Box>
    </Box>
    <RecipeReviewCard/>
    </div>
  )
}

export default Services