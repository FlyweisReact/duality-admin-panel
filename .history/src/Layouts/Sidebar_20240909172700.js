import React from 'react'
import { verticalLogo } from '../assest'

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div className='logo-container'>
            <img src={verticalLogo} alt='' />
        </div>
    </section>
  )
}

export default Sidebar
