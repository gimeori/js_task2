import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { differences } from '/src/data'

export default function TempDrawer() {
    const [open, setOpen] = useState(false);
    const [phrase, setPhrase] = useState(null);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const handleLabClick = (lab) => {
      setPhrase(lab);
      setOpen(false); 
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['lab1', 'lab2', 'lab3', 'lab4', 'lab9'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleLabClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  
    return (
      <div>
        <Button onClick={toggleDrawer(true)}><MailIcon style={{color:'black'}} /></Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
        <p>{phrase && differences[phrase]}</p> 
      </div>
    );
  }