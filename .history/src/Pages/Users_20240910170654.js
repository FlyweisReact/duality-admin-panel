import React from 'react'
import { SectionHeading } from '../Components/HelpingComponent'
import HOC from '../Layouts/HOC'

const Users = () => {
  return (
    <section className='user-page'>
        <p className='section-heading'>Users</p>
        <SectionHeading title={''} />
    </section>
  )
}

export default HOC(Users)
