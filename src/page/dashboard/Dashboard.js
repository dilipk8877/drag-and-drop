import React from 'react'
import Sidebar from '../../componet/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
        <Sidebar>
            <Outlet/>
        </Sidebar>
  )
}

export default Dashboard
