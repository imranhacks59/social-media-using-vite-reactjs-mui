import { useState } from 'react'
import './App.css'
import {
  Box, Stack,
} from "@mui/material";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/feed';
import Rightbar from './components/Rightbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
       <Navbar />
       <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
       </Stack>
    </Box>
  )
}

export default App
