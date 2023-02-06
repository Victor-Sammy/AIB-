import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'

const CarsOpt = () => {
  const [cars, setCars] = useState('selectCar')

  const [toyota, setToyota] = useState(false)
  const [benz, setBenz] = useState(false)

  useEffect(() => {
    cars === 'toyota' ? setToyota(true) : setToyota(false)
    cars === 'benz' ? setBenz(true) : setBenz(false)
  }, [cars])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setCars(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select className='subcat-select2' value={cars} onChange={handleChange}>
          <option value='selectCar'>Select Cars</option>
          <option value='toyota'>Toyota</option>
          <option value='benz'>Benz</option>
        </select>
      </div>
    </div>
  )
}

export default CarsOpt
