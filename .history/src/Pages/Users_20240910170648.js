import React from 'react'
import HOC from '../Layouts/HOC'

const Users = () => {
  return (
    <section className='user-page'>
        <p className='section-heading'>Users</p>
        <SectionHeading />
    </section>
  )
}

export default HOC(Users)
