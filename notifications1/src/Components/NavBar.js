import React from 'react'

export default function NavBar() {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>Student Monitoring</a>
      <ul>
        <li>
            <a href='#'>Agent</a>
        </li>
        <li>
            <a href='#'>Parent</a>
        </li>
      </ul>
    </nav>
  )
}