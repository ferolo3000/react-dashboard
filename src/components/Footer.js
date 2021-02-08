import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <p className="copyright text-center">
             F3R © 2021
          </p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer