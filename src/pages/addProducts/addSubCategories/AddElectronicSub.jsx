import React, { useEffect, useState } from 'react'
import '../.././../sass/components/_subCatOpt.scss'

const AddElectronicSub = () => {
  const [electronics, setElectronics] = useState('selectElectronics')

  const [laptopsComputer, setLaptopsComputer] = useState(false)
  const [headPhones, setHeadPhones] = useState(false)
  const [audioEquipments, setAudioEquipments] = useState(false)
  const [computerAccessories, setComputerAccessories] = useState(false)
  const [electronicsAccessories, setElectronicsAccessories] = useState(false)
  const [cameras, setCameras] = useState(false)
  const [pspMachines, setPspMachines] = useState(false)
  const [videoGamesAccessories, setVideoGamesAccessories] = useState(false)
  const [tvDvdEquipments, setTvDvdEquipments] = useState(false)
  const [electricalEquipments, setElectricalEquipments] = useState(false)

  useEffect(() => {
    electronics === 'laptopsComputer'
      ? setLaptopsComputer(true)
      : setLaptopsComputer(false)
    electronics === 'HeadPhones' ? setHeadPhones(true) : setHeadPhones(false)
    electronics === 'audioEquipments'
      ? setAudioEquipments(true)
      : setAudioEquipments(false)
    electronics === 'computerAccessories'
      ? setComputerAccessories(true)
      : setComputerAccessories(false)
    electronics === 'Electronics Accessories'
      ? setElectronicsAccessories(true)
      : setElectronicsAccessories(false)
    electronics === 'cameras' ? setCameras(true) : setCameras(false)
    electronics === 'pspMachines' ? setPspMachines(true) : setPspMachines(false)
    electronics === 'videoGamesAccessories'
      ? setVideoGamesAccessories(true)
      : setVideoGamesAccessories(false)
    electronics === 'tvDvdEquipments'
      ? setTvDvdEquipments(true)
      : setTvDvdEquipments(false)
    electronics === 'electricalEquipments'
      ? setElectricalEquipments(true)
      : setElectricalEquipments(false)
  }, [electronics])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setElectronics(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={electronics}
          onChange={handleChange}
        >
          <option value='selectElectronics'>Select Electronics</option>
          <option value='laptopsComputer'>Laptops & Computers</option>
          <option value='HeadPhones'>Headphones</option>
          <option value='audioEquipments'>Audion & Music Equipment</option>
          <option value='computerAccessories'>Computer Accessories</option>
          <option value='Electronics Accessories'>
            Electronic Accessories
          </option>
          <option value='cameras'>Photo & Video Cameras</option>
          <option value='pspMachines'>
            Printers, Scanners, Photocopy machines
          </option>
          <option value='videoGamesAccessories'>
            Video Games & Accessories
          </option>
          <option value='tvDvdEquipments'>Tv and Dvd Equipment</option>
          <option value='electricalEquipments'>Electrical Equipment</option>
        </select>
      </div>
    </div>
  )
}

export default AddElectronicSub
