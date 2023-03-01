import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const PhonesTabOpt = () => {
  const [phonesTab, setPhonesTab] = useState('selectPhonesTab')

  const [mobilePhones, setMobilePhones] = useState(false)
  const [mobileTablets, setMobileTablets] = useState(false)
  const [mptAccessories, setMptAccessories] = useState(false)
  const [smartWatches, setSmartWatches] = useState(false)

  useEffect(() => {
    phonesTab === 'Mobile Phones'
      ? setMobilePhones(true)
      : setMobilePhones(false)
    phonesTab === 'Mobile Tablets'
      ? setMobileTablets(true)
      : setMobileTablets(false)
    phonesTab === 'Mobile Phone & Tablet Accessories'
      ? setMptAccessories(true)
      : setMptAccessories(false)
    phonesTab === 'Smart watches & Trackers'
      ? setSmartWatches(true)
      : setSmartWatches(false)
  }, [phonesTab])

  const handleChange = (e) => {
    localStorage.setItem('subCategory', e.target.value)
    setPhonesTab(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={phonesTab}
          onChange={handleChange}
        >
          <option value='selectCommEquip'>Select Phones & Tablets</option>
          <option value='Mobile Phones'>Mobile Phones</option>
          <option value='Mobile Tablets'>Mobile Tablets</option>
          <option value='Mobile Phone & Tablet Accessories'>
            Mobile Phone & Tablet Accessories
          </option>
          <option value='Smart watches & Trackers'>
            Smart watches & Trackers
          </option>
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

export default PhonesTabOpt
