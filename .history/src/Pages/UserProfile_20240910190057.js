import React from 'react'
import { BackBtn, SectionHeading } from '../Components/HelpingComponent'
import HOC from '../Layouts/HOC'

const UserProfile = () => {
  return (
    <section className='user-profile-page'>
    <div className='flexbox-container'>
        <BackBtn />
    </div>

    </section>
  )
}

export default HOC(UserProfile)
