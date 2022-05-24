import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link className='nav__child' to='/homepage'>Home</Link>
        <Link className='nav__child' to='/student'>Students</Link>
        <Link className='nav__child' to='/contact'>Contact</Link>
    </div>
  )
}

export default Nav