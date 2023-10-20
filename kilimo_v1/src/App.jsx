import React from 'react'
import { useState } from 'react'
import './App.css'
import Sidebar from './components/SideBar Section/Sidebar'
import Body from './components/Body section/Body'

const App = () => {


  return (
    <div className="container">
      <Sidebar/>
      <Body/>
    </div>
  )

}

export default App
