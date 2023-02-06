import React, { useEffect, useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import MusicArtInput from './MusicArtInput'

const MusicArtOp = () => {
  const musicArt = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={musicArt}>
          <option value='selectMusicArt'>Select an Option</option>
          <option value='musicalAccessories'>Musical Accessories</option>
          <option value='musicalInstruments'>Musical Instruments</option>
        </select>
      </div>
      <div>{musicalAccessories && <MusicArtInput />}</div>
      <div>{musicalInstruments && <MusicArtInput />}</div>
    </div>
  )
}

export default MusicArtOp
