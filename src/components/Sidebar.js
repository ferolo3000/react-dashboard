import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              React Dashboard
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
              <i class="fas fa-home fa-fw"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/portfolio'>
              <i class="fas fa-chart-bar"></i>
                <p>Portfolios</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/marketing'>
              <i class="fas fa-bullseye"></i>
                <p>Marketing</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
              <i class="fas fa-user"></i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/settings'>
              <i class="fas fa-cog"></i>
                <p>Settings</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar