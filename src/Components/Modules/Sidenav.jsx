import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera, FaVideo, FaBinoculars, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FiHome, FiBox, FiMonitor, FiAperture } from "react-icons/fi";

function Sidenav() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidenav-container">
      <div className={`sidenav ${collapsed ? "collapsed" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidenav-header">
          <button
            onClick={toggleSidebar}
            className="toggle-btn"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
          </button>
          {!collapsed && <h2 className="brand-title">Camera World</h2>}
        </div>

        {/* Menu Items */}
        <ul className="sidenav-menu">
          <li className="menu-item">
            <Link to="/" aria-label="Dashboard">
              <FiHome className="menu-icon" />
              {!collapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/camera" aria-label="Camera">
              <FaCamera className="menu-icon" />
              {!collapsed && <span>Camera</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/lens" aria-label="Lenses">
              <FiAperture className="menu-icon" />
              {!collapsed && <span>Lenses</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/accessories" aria-label="Accessories">
              <FiBox className="menu-icon" />
              {!collapsed && <span>Accessories</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/videocamera" aria-label="Video Camera">
              <FaVideo className="menu-icon" />
              {!collapsed && <span>Video Camera</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/digital" aria-label="Digital">
              <FiMonitor className="menu-icon" />
              {!collapsed && <span>Digital</span>}
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/binoculars" aria-label="Binoculars">
              <FaBinoculars className="menu-icon" />
              {!collapsed && <span>Binoculars</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
