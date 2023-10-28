import React from 'react'
import Box from '@mui/material/Box';
import Header from './Header';
import Services from './Services';
const Main = () => {
  return (
    <Box sx={{width:"97%",minHeight:"100vh",backgroundColor:"lightgray",padding:"20px"}}>
    <Box sx={{width:"98%",borderRadius:"15px",minHeight:"98vh",backgroundColor:"white",padding:"15px"}}>
     <Header/>
     <Services/>
    </Box>
    </Box>
  )
}

export default Main