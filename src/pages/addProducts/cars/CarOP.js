import React, { useEffect, useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import Car from './Car'

const CarOP = () => {
  const cars = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

  const [toyota, setToyota] = useState(false)
  const [benz, setBenz] = useState(false)

  useEffect(() => {
    cars === 'toyota' ? setToyota(true) : setToyota(false)
    cars === 'benz' ? setBenz(true) : setBenz(false)
  }, [cars])

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={cars}>
          <option value='selectCar'>Select Cars</option>
          <option value='toyota'>Toyota</option>
          <option value='benz'>Benz</option>
        </select>
      </div>
      <div>{toyota && <Car />}</div>
      <div>{benz && <Car />}</div>
    </div>
  )
}

export default CarOP
