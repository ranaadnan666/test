import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./style.css"

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div style={{position:"relative"}}>
    
    <Box position="static" sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex',color:"black" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:"black"
            }}
          >
            Agency
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
     
          </Box>
       <Box sx={{ flexGrow: 0.5 ,zIndex:"2"}}>
 <Box sx={{backgroundColor:"white",color:"black",padding:"15px",borderRadius:"10px",fontWeight:"bold",width:"40px"}}>
 Like
 </Box>
      </Box>
          <Box sx={{ flexGrow: 0,color:"white",zIndex:"3" }}>
            <Box sx={{backgroundColor:"tomato",color:"black",padding:"15px",borderRadius:"20px",fontWeight:"bold"}} >
             <span>Contact Us</span>   
            </Box>
          </Box>
       
        </Toolbar>
      </Container>
    </Box>
    <Box sx={{width:"37%",height:"550px"}} className="right-side">
    </Box>
     <Box sx={{width:"200px",height:"100px",backgroundColor:"white",
     borderRadius:"30px",position:"absolute",top:"-10px",right:"-10px",zIndex:"2"}}>
     </Box>
     <Box sx={{width:"20px",height:"40px",backgroundColor:"white",borderRadius:"20px", rotate: "-30deg",
    position:"absolute",top:"-15px",right:"177px",zIndex:"2"
    }}>

     </Box>
     <Box sx={{width:"25px",height:"55px",backgroundColor:"white",borderRadius:"20px", rotate: "130deg",
    position:"absolute",top:"60px",right:"-3px",zIndex:"2"
    }}>

     </Box>
      <Box sx={{width:"200px",height:"100px",backgroundColor:"white",
     borderRadius:"30px",position:"absolute",top:"250px",right:"-10px",zIndex:"2",textAlign:"center"}}>
     <Box sx={{marginTop:"10px"}}>
         <span style={{fontSize:"24px",fontWeight:"800"}}>10+</span><br/>
      <span style={{fontSize:"24px",fontWeight:"600"}}>Award Winnig</span>
     </Box>
     </Box>
       <Box sx={{width:"20px",height:"40px",backgroundColor:"white",borderRadius:"20px", rotate: "220deg",
    position:"absolute",top:"227px",right:"-6px",zIndex:"2"
    }}>

     </Box>
     <Box sx={{width:"20px",height:"40px",backgroundColor:"white",borderRadius:"20px", rotate: "130deg",
    position:"absolute",top:"330px",right:"-5px",zIndex:"2"
    }}>
    
    </Box>
     <Box sx={{backgroundColor:"white",color:"black",padding:"15px",borderRadius:"10px",fontWeight:"bold"
     ,position:"absolute",top:"190px",right:"15px",zIndex:"2"}}>
 okk
 </Box>
     <Box sx={{width:"150px",height:"100px",backgroundColor:"white",
     borderRadius:"30px",position:"absolute",top:"365px",right:"202px",zIndex:"2",textAlign:"center"}}>
     <Box sx={{marginTop:"10px"}}>
         <span style={{fontSize:"24px",fontWeight:"800"}}>13+</span><br/>
      <span style={{fontSize:"24px",fontWeight:"600"}}>Experience</span>
     </Box>
     </Box>
       <Box sx={{width:"150px",height:"100px",backgroundColor:"white",
     borderRadius:"30px",position:"absolute",top:"455px",right:"340px",zIndex:"2",textAlign:"center"}}>
     <Box sx={{marginTop:"10px"}}>
         <span style={{fontSize:"24px",fontWeight:"800"}}>50+</span><br/>
      <span style={{fontSize:"24px",fontWeight:"600"}}>Company</span>
     </Box>
     </Box>
     <Box sx={{width:"40px",height:"60px",backgroundColor:"white",borderRadius:"20px", rotate: "220deg",
    position:"absolute",top:"430px",right:"325px",zIndex:"2"
    }}>
    
    </Box>
    <Box sx={{backgroundColor:"white",color:"black",padding:"15px",borderRadius:"10px",fontWeight:"bold"
     ,position:"absolute",top:"390px",right:"380px",zIndex:"2"}}>
 done
 </Box>
 <Box sx={{width:"20px",height:"40px",backgroundColor:"white",borderRadius:"20px", rotate: "310deg",
    position:"absolute",top:"435px",right:"465px",zIndex:"2"
    }}>

     </Box>
     <Box sx={{width:"30px",height:"50px",backgroundColor:"white",borderRadius:"20px", rotate: "135deg",
    position:"absolute",top:"525px",right:"330px",zIndex:"2"
    }}>
    
    </Box>
    <Box sx={{width:"25px",height:"200px",backgroundColor:"white",borderRadius:"5px", 
    position:"absolute",top:"155px",right:"455px",zIndex:"2"
    }}>
    
    </Box>
    <Box sx={{width:"10px",height:"30px",backgroundColor:"white",borderRadius:"20px", rotate: "315deg",
    position:"absolute",top:"140px",right:"468px",zIndex:"2"
    }}>

     </Box>
     <Box sx={{width:"10px",height:"30px",backgroundColor:"white",borderRadius:"20px", rotate: "415deg",
    position:"absolute",top:"338px",right:"468px",zIndex:"2"
    }}>

     </Box>
</div>
  );
}
export default ResponsiveAppBar;