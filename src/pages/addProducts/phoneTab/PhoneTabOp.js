import React, { useEffect, useState } from 'react'
import PhoneTabInput from './PhoneTabInput'

const PhoneTabOp = () => {
  const phonesTab = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={phonesTab}>
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
      <div>{mobilePhones && <PhoneTabInput />}</div>
      <div>{mobileTablets && <PhoneTabInput />}</div>
      <div>{mptAccessories && <PhoneTabInput />}</div>
      <div>{smartWatches && <PhoneTabInput />}</div>
    </div>
  )
}

export default PhoneTabOp
