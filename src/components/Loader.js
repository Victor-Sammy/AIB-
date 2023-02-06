import React from 'react'
import '../sass/components/_loader.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AppStore from '../assets/appstore.png'
import GooglePlay from '../assets/gplay.png'

const Loader = () => {
  return (
    <motion.div className='load'>
      <motion.div className='loader'>
        <motion.div className='load1'>
          <motion.div
            className='logo'
            animate={{ opacity: 1, y: -300 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ duration: 2, delay: 5 }}
          >
            <img src={require('../assets/AIB logo.png')} alt='' />
          </motion.div>
          <motion.div
            className='logo-title'
            animate={{ opacity: 1, y: -300 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 5 }}
          >
            <img src={require('../assets/Group 1.png')} alt='' />
          </motion.div>

          <motion.div
            className='loader-content'
            id='loader-content'
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 5 }}
          >
            Get the most out of every <br /> shopping experience
          </motion.div>
          <Link to='/home'>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2, delay: 5 }}
              className='btn'
              id='btn'
            >
              <div className='btn-text'>
                <p>start shopping</p>
              </div>

              <div className='btn-icon'>
                <BsArrowRightShort />
              </div>
            </motion.div>
          </Link>

          <motion.img
            className='img1'
            id='img1'
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2, delay: 5 }}
            src={require('../assets/img1.png')}
            alt=''
          />
          <motion.img
            className='img2'
            id='img2'
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2, delay: 5 }}
            src={require('../assets/img2.png')}
            alt=''
          />
          <motion.div className='load-button' id='load-button'>
            <motion.button
              className='btn1'
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 3, delay: 5 }}
            >
              <img src={AppStore} alt='' />
            </motion.button>
            <motion.button
              className='btn2'
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 3, delay: 5 }}
            >
              <img src={GooglePlay} alt='' />
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className='load2'>
          <motion.div className='logo'>
            <motion.img
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, delay: 4 }}
              src={require('../assets/AIB logo.png')}
              alt=''
            />
          </motion.div>
          <motion.div className='logo-title'>
            <motion.img
              className='title-img'
              key='title-img'
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, delay: 4 }}
              src={require('../assets/Group 1.png')}
              alt=''
            />
          </motion.div>
        </motion.div>
        <motion.div className='load3'>
          <motion.div className='logo'>
            <motion.img
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2 }}
              src={require('../assets/AIB logo.png')}
              alt=''
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
