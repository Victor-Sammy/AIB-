import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'

const HousesOpt = () => {
  const [housing, setHousing] = useState('makeSelection')

  const [housesRent, setHousesRent] = useState(false)
  const [housesSale, setHousesSale] = useState(false)
  const [commercialRent, setCommercialRent] = useState(false)
  const [commercialSale, setCommercialSale] = useState(false)
  const [eventCentres, setEventCentres] = useState(false)
  const [landRent, setLandRent] = useState(false)
  const [landSale, setLandSale] = useState(false)
  const [hotels, setHotels] = useState(false)

  useEffect(() => {
    housing === 'Houses & Apartments for Rent'
      ? setHousesRent(true)
      : setHousesRent(false)
    housing === 'Houses & Apartments fot Sale'
      ? setHousesSale(true)
      : setHousesSale(false)
    housing === 'Commercial Property for Rent'
      ? setCommercialRent(true)
      : setCommercialRent(false)
    housing === 'Commercial Property for Sale'
      ? setCommercialSale(true)
      : setCommercialSale(false)
    housing === 'Events Centres, Venues & Workstations'
      ? setEventCentres(true)
      : setEventCentres(false)
    housing === 'Land & Plots for Rent' ? setLandRent(true) : setLandRent(false)
    housing === 'Land & Plots for Sale' ? setLandSale(true) : setLandSale(false)
    housing === 'Shortlets & Hotels' ? setHotels(true) : setHotels(false)
  }, [housing])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setHousing(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={housing}
          onChange={handleChange}
        >
          <option value='makeSelection'>Select an Option</option>
          <option value='Commercial Property for Sale'>
            Commercial Property for Sale
          </option>
          <option value='Commercial Property for Rent'>
            Commercial Property for Rent
          </option>
          <option value='Houses & Apartments fot Sale'>
            Houses & Apartments fot Sale
          </option>
          <option value='Houses & Apartments for Rent'>
            Houses & Apartments for Rent
          </option>
          <option value='Events Centres, Venues & Workstations'>
            Events Centres, Venues & Workstations{' '}
          </option>
          <option value='Land & Plots for Sale'>Land & Plots for Sale</option>
          <option value='Land & Plots for Rent'>Land & Plots for Rent</option>
          <option value='Shortlets & Hotels'>Shortlets & Hotels</option>
        </select>
      </div>
    </div>
  )
}

export default HousesOpt
