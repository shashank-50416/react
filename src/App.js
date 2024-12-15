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




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
         <Route path='/' element={<Dashboard/>} />
         <Route path='/camera' element={<Camera/>}/>
         <Route path='/digital' element={<Digital/>}/>
         <Route path='/videocamera' element={<Videocamera/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App