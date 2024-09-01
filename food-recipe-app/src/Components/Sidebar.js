import React from 'react'
import "../Styles/Sidebar.css"


const Sidebar = ({links , close}) => {
  return (
    <div className='sidebar' onClick={close}>
      {links.map((link) => (
        <a className='sidebar-link' href="#!" key={link.name}>
         <span className='sidebar-icons'> {link.icon} </span>
          {link.name}
          </a>
      ))}
    </div>
  )
}

export default Sidebar