import React from 'react'
import { BackBtn } from '../Components/HelpingComponent'
import HOC from '../Layouts/HOC'

const UserProfile = () => {
  return (
    <section className='user-profile-page'>
    <div className='flexbox-container'>
        <BackBtn />
        <Sec
    </div>

    </section>
  )
}

export default HOC(UserProfile)
