import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <nav className='navbar bg-primary'>
        <h1>
        <i class="fa fa-github" aria-hidden="true"></i>
        <Link to='/'>Github Profile Finder</Link>
        
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            
        </ul>

    </nav>
  )
}

export default Navbar
