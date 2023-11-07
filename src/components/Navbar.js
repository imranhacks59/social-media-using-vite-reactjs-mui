import React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    makeStyles
  } from "@mui/material";
 
const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{
        margin:0,
        padding:0
    }}>
        <Toolbar sx={{
        margin:0,
        padding:0
    }}>
        Navbar
        </Toolbar>
    </AppBar>
  )
}

export default Navbar