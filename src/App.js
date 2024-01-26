import React from 'react'
import Login from './page/login/Login'
import "./App.css"
import Dashboard from './page/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Upload from './page/upload/Upload'
import Invoice from './page/Invoice/Invoice'
import Schedule from './page/schedule/Schedule'
import Calendar from './page/calendar/Calendar'
import Notification from './page/notification/Notification'
import Setting from './page/setting/Setting'
import Home from './page/home/Home'


const App = () => {
  return (
  //  <Login/>
  // <Dashboard/>
  <>
  <Routes>
    <Route path='/' element={<Dashboard/>} >
    <Route path='/' element={<Home/>} />
    <Route path='/upload' element={<Upload/>} />
    <Route path='/invoice' element={<Invoice/>} />
    <Route path='/schedule' element={<Schedule/>} />
    <Route path='/calendar' element={<Calendar/>} />
    <Route path='/notification' element={<Notification/>} />
    <Route path='/setting' element={<Setting/>} />
    </Route>
  </Routes>
  </>
  )
}

export default App
