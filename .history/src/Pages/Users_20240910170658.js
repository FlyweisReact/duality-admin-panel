import React from 'react'
import { SectionHeading } from '../Components/HelpingComponent'
import HOC from '../Layouts/HOC'

const Users = () => {
  return (
    <section className='user-page'>
        <SectionHeading title={'Users'} />
    </section>
  )
}

export default HOC(Users)
