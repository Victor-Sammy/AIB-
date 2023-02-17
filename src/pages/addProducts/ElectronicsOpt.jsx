import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'
import ElectronicsInput from './electronics/ElectronicsInput'
import LaptopCompInput from './laptopsComp/LaptopCompInput'

const ElectronicsOpt = () => {
  const electronics = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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
    electronics === 'Computer Accessories'
      ? setComputerAccessories(true)
      : setComputerAccessories(false)
    electronics === 'electronicsAccessories'
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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={electronics}>
          <option value='selectElectronics'>Select Electronics</option>
          <option value='laptopsComputer'>Laptops & Computers</option>
          <option value='HeadPhones'>Headphones</option>
          <option value='audioEquipments'>Audion & Music Equipment</option>
          <option value='Computer Accessories'>Computer Accessories</option>
          <option value='electronicsAccessories'>Electronic Accessories</option>
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
      <div>{laptopsComputer && <LaptopCompInput />}</div>
      <div>{headPhones && <ElectronicsInput />}</div>
      <div>{audioEquipments && <ElectronicsInput />}</div>
      <div>{computerAccessories && <ElectronicsInput />}</div>
      <div>{electronicsAccessories && <ElectronicsInput />}</div>
      <div>{cameras && <ElectronicsInput />}</div>
      <div>{pspMachines && <ElectronicsInput />}</div>
      <div>{videoGamesAccessories && <ElectronicsInput />}</div>
      <div>{tvDvdEquipments && <ElectronicsInput />}</div>
      <div>{electricalEquipments && <ElectronicsInput />}</div>
    </div>
  )
}

export default ElectronicsOpt
