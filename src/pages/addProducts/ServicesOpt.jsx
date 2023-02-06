import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'

const ServicesOpt = () => {
  const [services, setServices] = useState('makeSelection')

  const [automotive, setAutomotive] = useState(false)
  const [btServices, setBtServices] = useState(false)
  const [caServices, setCaServices] = useState(false)
  const [child, setChild] = useState(false)
  const [classes, setClasses] = useState(false)
  const [cleaning, setCleaning] = useState(false)
  const [computer, setComputer] = useState(false)
  const [dj, setDj] = useState(false)
  const [fitness, setFitness] = useState(false)
  const [health, setHealth] = useState(false)
  const [landscaping, setLandscaping] = useState(false)
  const [legal, setLegal] = useState(false)
  const [logistics, setLogistics] = useState(false)
  const [manufacturing, setManufacturing] = useState(false)
  const [catering, setCatering] = useState(false)
  const [pet, setPet] = useState(false)
  const [photography, setPhotography] = useState(false)
  const [printing, setPrinting] = useState(false)
  const [recruitment, setRecruitment] = useState(false)
  const [repair, setRepair] = useState(false)
  const [tax, setTax] = useState(false)
  const [travel, setTravel] = useState(false)
  const [wedding, setWedding] = useState(false)

  useEffect(() => {
    services === 'Automotive Services'
      ? setAutomotive(true)
      : setAutomotive(false)
    services === 'Building & Trade Services'
      ? setBtServices(true)
      : setBtServices(false)
    services === 'Chauffeur & Airport Transfer Services'
      ? setCaServices(true)
      : setCaServices(false)
    services === 'Child Care & Education Services'
      ? setChild(true)
      : setChild(false)
    services === 'Classes & Courses' ? setClasses(true) : setClasses(false)
    services === 'Cleaning Services' ? setCleaning(true) : setCleaning(false)
    services === 'Computer & IT Services'
      ? setComputer(true)
      : setComputer(false)
    services === 'DJ & Entertainment Services' ? setDj(true) : setDj(false)
    services === 'Fitness & Personal Training Services'
      ? setFitness(true)
      : setFitness(false)
    services === 'Health & Beauty Services' ? setHealth(true) : setHealth(false)
    services === 'Landscaping & Gardening Services'
      ? setLandscaping(true)
      : setLandscaping(false)
    services === 'Legal Services' ? setLegal(true) : setLegal(false)
    services === 'Logistics Services' ? setLogistics(true) : setLogistics(false)
    services === 'Manufacturing Services'
      ? setManufacturing(true)
      : setManufacturing(false)
    services === 'Party, Catering & Event Services'
      ? setCatering(true)
      : setCatering(false)
    services === 'Pet Services' ? setPet(true) : setPet(false)
    services === 'Photography & Video Services'
      ? setPhotography(true)
      : setPhotography(false)
    services === 'Printing Services' ? setPrinting(true) : setPrinting(false)
    services === 'Recruitment Services'
      ? setRecruitment(true)
      : setRecruitment(false)
    services === 'Repair Services' ? setRepair(true) : setRepair(false)
    services === 'Tax & Financial Services' ? setTax(true) : setTax(false)
    services === 'Travel Agents & Tours' ? setTravel(true) : setTravel(false)
    services === 'Wedding Venues & Services'
      ? setWedding(true)
      : setWedding(false)
  }, [services])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setServices(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={services}
          onChange={handleChange}
        >
          <option value='makeSelection'>Select an Option</option>
          <option value='Automotive Services'>Automotive Services</option>
          <option value='Building & Trade Services'>
            Building & Trade Services
          </option>
          <option value='Chauffeur & Airport Transfer Services'>
            Chauffeur & Airport Transfer Services
          </option>
          <option value='Child Care & Education Services'>
            Child Care & Education Services
          </option>
          <option value='Classes & Courses'>Classes & Courses</option>
          <option value='Cleaning Services'>Cleaning Services</option>
          <option value='Computer & IT Services'>Computer & IT Services</option>
          <option value='DJ & Entertainment Services'>
            DJ & Entertainment Services
          </option>
          <option value='Fitness & Personal Training Services'>
            Fitness & Personal Training Services
          </option>
          <option value='Health & Beauty Services'>
            Health & Beauty Services
          </option>
          <option value='Landscaping & Gardening Services'>
            Landscaping & Gardening Services
          </option>
          <option value='Legal Services'>Legal Services</option>
          <option value='Logistics Services'>Logistics Services</option>
          <option value='Manufacturing Services'>Manufacturing Services</option>
          <option value='Party, Catering & Event Services'>
            Party, Catering & Event Services
          </option>
          <option value='Pet Services'>Pet Services</option>
          <option value='Photography & Video Services'>
            Photography & Video Services
          </option>
          <option value='Printing Services'>Printing Services</option>
          <option value='Recruitment Services'>Recruitment Services</option>
          <option value='Repair Services'>Repair Services</option>
          <option value='Tax & Financial Services'>
            Tax & Financial Services
          </option>
          <option value='Travel Agents & Tours'>Travel Agents & Tours</option>
          <option value='Wedding Venues & Services'>
            Wedding Venues & Services
          </option>
        </select>
      </div>
    </div>
  )
}

export default ServicesOpt
