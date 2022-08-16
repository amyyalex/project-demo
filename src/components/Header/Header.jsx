import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li className='main'>Main Tab</li>
            <li className='archive'>Archived</li>
        </ul>
        <hr/>
    </div>
  )
}
export default Header;