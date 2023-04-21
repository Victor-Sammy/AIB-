import React, { useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import StoreIcon from '../../assets/icons.png'
import settingsIcon from '../../assets/settings_.png'
import billingIcon from '../../assets/billing.png'
import pWardIcon from '../../assets/psward.png'
import notifyIcon from '../../assets/notify.png'
import logOutIcon from '../../assets/logout_.png'
//import Hamburger from '../../components/vectors/Hamburger'
import './settings.scss'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()
  //const [ navOpen, setNavOpen ] = useState(false)
  return (
    <section className='settings-pg'>
      <div className='settings-board'>
        <Outlet />
        <div className='settings-header'>
          <span>
            <BsArrowLeftCircleFill />
          </span>
          <div>Settings</div>
        </div>
        <div className='s-items'>
          <NavLink to='/settings/userSettings'>
            <div className='dashboard-item1'>
              <span>
                <img src={settingsIcon} alt='' />
              </span>
              <div>personal settings</div>
            </div>
          </NavLink>
          <NavLink to='/settings/createStore'>
            <div className='dashboard-item2'>
              <span>
                <img src={StoreIcon} alt='' />
              </span>
              <div>Store</div>
            </div>
          </NavLink>
          <div className='dashboard-item3'>
            <span>
              <img src={billingIcon} alt='' />
            </span>
            <div>Billing</div>
          </div>
          <div className='dashboard-item4'>
            <span>
              <img src={pWardIcon} alt='' />
            </span>
            <div>change password</div>
          </div>
          <div className='dashboard-item5'>
            <span>
              <img src={notifyIcon} alt='' />
            </span>
            <div>Notification settings</div>
          </div>
          <div className='dashboard-item6'>
            <span>
              <img src={logOutIcon} alt='' />
            </span>
            <div>logout</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
