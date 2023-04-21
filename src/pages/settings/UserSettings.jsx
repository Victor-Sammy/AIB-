import React from 'react'
import './user-settings.scss'
import { BsArrowRightCircleFill } from 'react-icons/bs'

const UserSettings = () => {
  return (
    <div className='userSetting-pg'>
      <h1>Personal Settings</h1>
      <p>Edit your personal settings below</p>
      <div className='input-div'>
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='text' placeholder='DOB' />
        <input type='text' placeholder='Address' />
      </div>
      <button>
        <div>Update</div>
        <span>
          <BsArrowRightCircleFill />
        </span>
      </button>
    </div>
  )
}

export default UserSettings
