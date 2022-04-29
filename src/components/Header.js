import React from 'react'
import { FaBars } from 'react-icons/fa'
import '../styles/Header.scss'

function Header({title,site}) {
    if(site === undefined){site = ''}
  return (
    <div className='header'>
        <span className='menu'><FaBars /></span>
        <h2>{title}</h2>
        <span className='site'>{site}</span>
    </div>
  )
}

export default Header