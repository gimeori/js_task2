import React,{useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'
import { ThemeContext } from '../providers/ThemeProvider'



export default function Navbar() {
  const[theme,setTheme]=useContext(ThemeContext);
  const changeTheme=() => {
    setTheme(theme==="light" ? "dark" : "light")
  }
 
  return (
    
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <button style={{float: 'left'}} onClick={changeTheme}>Theme</button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ justifyContent: 'center'}}>
          Современные средства разработки Web-приложений и котики
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/authors" color="inherit">Authors</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}
