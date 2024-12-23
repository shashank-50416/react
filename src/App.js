// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Modules/Dashboard';
import './App.css';
import './Components/Modules/Sidenav.css';
import Camera from './Components/Modules/Camera';
import Digital from './Components/Modules/Digital';
import Videocamera from './Components/Modules/Videocamera';
import Binoculars from './Components/Modules/Binoculars';
import Lens from './Components/Modules/Lens';
import CameraDetails from './Components/Details/CameraDetails';
import VideocameraDetails from './Components/Details/VideocameraDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/camera" element={<Camera />} />
        <Route path='/camera/:id' element={< CameraDetails/>} />
        <Route path="/videocamera" element={<Videocamera />} />
        <Route path="/videocamer/id" element={<VideocameraDetails />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/binoculars" element={<Binoculars />} />
        <Route path="/lens" element={<Lens />} />
      </Routes>
    </Router>
  );
}

export default App;
