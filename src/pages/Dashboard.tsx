import Box from "@mui/material/Box/Box"
import { Outlet } from "react-router-dom"
function Dashboard() {
  return (
    <div>
      <Box sx={{marginTop : '40px'}}>
      <p>Welcome to Dashboard</p>
      </Box>
      <Outlet />
    </div>
  )
}

export default Dashboard
