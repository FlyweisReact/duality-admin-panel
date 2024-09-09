import React from 'react'
import { homeLayout, verticalLogo } from '../assest'

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div className='logo-container'>
            <img src={verticalLogo} alt='' />
        </div>
        <div className='links'>
            <div className='item'>
                <img src={homeLayout} alt='' />
                
            </div>
        </div>
    </section>
  )
}

export default Sidebar
