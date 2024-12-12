import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className='side'>
      <ul>
        <Link to={"/dashboard"}><li>Dashboard</li></Link>
        <Link to={"/camera"}><li>Camera</li></Link>
        <Link to={"/lens"}><li>Lenses</li></Link>
        <Link to={"/accessories"}><li>Accessories</li></Link>
        <Link to={"/videocamera"}><li>Video Camera</li></Link>
        <Link to={"/digital"}><li>Digital</li></Link>
        <Link to={"/binoculars"}><li>Binoculars</li></Link>
      </ul>
    </div>
  );
}

export default Sidenav;