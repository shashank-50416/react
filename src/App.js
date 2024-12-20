import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Modules/Dashboard'
import './App.css'
import './Components/Modules/Sidenav.css'
import Camera from './Components/Modules/Camera'
import Digital from './Components/Modules/Digital'
import Videocamera from './Components/Modules/Videocamera'
import Binoculars from './Components/Modules/Binoculars'
import Lens from './Components/Modules/Lens'
import { Cameradata } from './Components/Data/Cameradata'
import CameraDisplay from './Components/Modules/Show/CameraDisplay' 



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
         <Route path='/' element={<Dashboard/>} />
         <Route path='/camera' element={<Camera/>}/>
         <Route path="/" element={<Camera />} />
         <Route path="/camera/:id" element={<CameraDisplay />} /> 
         <Route path='/videocamera' element={<Videocamera/>}/>
         <Route path='/digital' element={<Digital/>}/>
         <Route path='/Binoculars' element={<Binoculars/>}/>
         <Route path='/Lens' element={<Lens/>}/>
         <Route path='/cameradata' element={<Cameradata/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App