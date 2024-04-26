import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { differences } from '../src/data'


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [phrase,setPhrase] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLabClick = (lab) => {
    setPhrase(lab);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={()=> handleLabClick('lab1')}>Lab 1</MenuItem>
        <MenuItem onClick={()=> handleLabClick('lab2')}>Lab 2</MenuItem>
        <MenuItem onClick={()=> handleLabClick('lab3')}>Lab 3</MenuItem>
        <MenuItem onClick={()=> handleLabClick('lab4')}>Lab 4</MenuItem>  
      </Menu>
      <p>{differences[phrase]}</p>
    </div>
  );
}