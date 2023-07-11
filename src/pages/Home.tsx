import Box from '@mui/material/Box/Box'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Box sx={{marginTop : '40px'}}>
      <p>Welcome to Home page</p>
      </Box>
      <Outlet />
    </div>
  )
}

export default Home
