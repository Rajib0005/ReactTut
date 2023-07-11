import Box from "@mui/material/Box/Box"
import { useContext, useState } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";
import { colors } from "@mui/material";

function Dashboard() {
  const {authenticated} = useContext(AuthContext);
  return (
    <div>
      <Box sx={{marginTop : '40px'}}>
      <p>Welcome {authenticated.email} to Dashboard</p>
      </Box>
      <Outlet />
    </div>
  )
}

export default Dashboard
