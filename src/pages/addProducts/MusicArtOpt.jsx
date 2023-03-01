import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const MusicArtOpt = () => {
  const [musicArt, setMusicArt] = useState('selectMusicArt')

  const [musicalInstruments, setMusicalInstruments] = useState(false)
  const [musicalAccessories, setMusicalAccessories] = useState(false)

  useEffect(() => {
    musicArt === 'musicalInstruments'
      ? setMusicalInstruments(true)
      : setMusicalInstruments(false)
    musicArt === 'musicalAccessories'
      ? setMusicalAccessories(true)
      : setMusicalAccessories(false)
  }, [musicArt])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setMusicArt(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={musicArt}
          onChange={handleChange}
        >
          <option value='selectMusicArt'>Select an Option</option>
          <option value='musicalAccessories'>Musical Accessories</option>
          <option value='musicalInstruments'>Musical Instruments</option>
        </select>
      </div>
      <div>
        <NavLink to='/addProduct'>
          <div className='next-btn'>
            <GrFormNextLink />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default MusicArtOpt
