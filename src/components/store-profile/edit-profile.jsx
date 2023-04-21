import React, { useRef, useState } from 'react'
import './edit-profile.scss'
import { BsFillImageFill } from 'react-icons/bs'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import { client } from '../../Api/Api'
import { getStoreItems } from '../../Api/store'
import { useQuery } from '@tanstack/react-query'

const EditProfile = () => {
  const storeQuery = useQuery({
    queryKey: ['store'],
    queryFn: getStoreItems,
  })
  console.log(storeQuery.data.data)
  const storeInfo = storeQuery.data.data[0]
  console.log(storeInfo.profile_image)

  const [coverPic, setCoverPic] = useState('')
  const [selectedImage, setSelectedImage] = useState(
    `${storeInfo ? storeInfo?.profile_image : ''}`
  )

  const storeId = storeQuery.data.data[0].id

  const [data, setData] = useState({
    storeName: `${storeInfo ? storeInfo.name : ''}`,
    location: `${storeInfo ? storeInfo?.address : ''}`,
    delivery: `${storeInfo ? storeInfo?.delivery : ''}`,
    description: `${storeInfo ? storeInfo?.description : ''}`,
  })
  const userEmail = localStorage.getItem('USER_EMAIL')
  const { user } = useAuth()
  console.log(user)

  const navigate = useNavigate()

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()

    // if (pic)
    formData.append('profile_image', selectedImage)
    formData.append('owner', userEmail)
    formData.append('name', data.storeName)
    formData.append('description', data.description)
    formData.append('address', data.location)
    formData.append('delivery', data.delivery)

    client
      .put(`/ad/store/${storeId}/`, formData, {
        headers: {
          'content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        response.data
        toast.success('store successfully updated')
        navigate('/profile')
        if (response.status !== 200) {
          console.log(response.data)
          toast.error('An error occurred:', response)
        }
      })
      .catch((error) => {
        toast.error('An error occurred:', error.response)
        console.log('An error occurred:', error.response)
      })
  }

  const option = [
    { label: 'True', value: 'True' },
    { label: 'False', value: 'False' },
  ]

  const filePicekerRef = useRef()
  const filePicekerRef2 = useRef()

  const handleImageChange = (e) => {
    const selectedFile = []
    const targetFile = e.target.files[0]
    const targetFilesObject = targetFile
    targetFilesObject &&
      selectedFile.push(URL.createObjectURL(targetFilesObject))
    setSelectedImage(selectedFile)
    console.log(selectedFile)

    // const reader = new FileReader()
    // // Gettting Selected File (user can select multiple but we are choosing only one)
    // // console.log(e.target.files[0]);
    // if (selectedFile) {
    //   reader.readAsDataURL(selectedFile)
    // }
    // reader.onload = (readerEvent) => {
    //   if (selectedFile.type.includes('image')) {
    //     setSelectedImage(readerEvent.target.result)
    //   }
    // }
  }
  const handleImage = (e) => {
    const selectedFile = []
    const targetFile = e.target.files[0]
    const targetFilesObject = targetFile
    targetFilesObject &&
      selectedFile.push(URL.createObjectURL(targetFilesObject))
    setCoverPic(selectedFile)
    console.log(selectedFile)

    // const reader = new FileReader()
    // // Gettting Selected File (user can select multiple but we are choosing only one)
    // // console.log(e.target.files[0]);
    // if (selectedFile) {
    //   reader.readAsDataURL(selectedFile)
    // }
    // reader.onload = (readerEvent) => {
    //   if (selectedFile.type.includes('image')) {
    //     setSelectedImage(readerEvent.target.result)
    //   }
    // }
  }

  return (
    <div className='edit-page' id='edit-page'>
      <div className='back-arr' onClick={() => navigate('/profile')}>
        <IoIosArrowRoundBack />
      </div>
      <form className='edit-box' onSubmit={handleSubmit}>
        <div className='e-header'>
          <span>Edit Store Profile</span>
        </div>
        <div className='e-img' id='e-img'>
          <div className='coverImg' id='coverImg'>
            {coverPic && <img src={coverPic} alt='' />}
          </div>
          <div className='img'>
            <div className='header-icon' id='header-icon'>
              <img src={selectedImage} alt='Store img' />
            </div>
          </div>
          <button
            className='edit_cover'
            onClick={() => filePicekerRef2.current.click()}
          >
            Cover Photo
          </button>
          <input
            ref={filePicekerRef2}
            onChange={(e) => {
              handleImage(e)
            }}
            type='file'
            accept='imag/jpeg,imag/png,imag/gif'
            hidden
          />

          <div
            className='icon-load'
            onClick={() => filePicekerRef.current.click()}
          >
            <BsFillImageFill />
            Store Photo
          </div>
          <input
            ref={filePicekerRef}
            onChange={(e) => {
              handleImageChange(e)
            }}
            type='file'
            accept='imag/jpeg,imag/png,imag/gif'
            hidden
          />
        </div>

        <div className='e-details'>
          <div className='e-d-left'>
            <div className='input'>
              <span>Store Name</span>
              <InputText
                id='storeName'
                name='storeName'
                value={data.storeName}
                onChange={handle}
                required
              />
            </div>
            <div className='input'>
              <span>Location</span>
              <InputText
                type='text'
                name='location'
                id='location'
                value={data.location}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='e-d-right'>
            <div className='input'>
              <span>Description</span>
              <InputText
                type='text'
                name='description'
                id='description'
                value={data.description}
                onChange={handle}
                required
              />
            </div>
            <div className='input'>
              <span></span>
              <Dropdown
                // optionLabel="name"
                className='d-input'
                name='delivery'
                id='delivery'
                value={data.delivery}
                options={option}
                onChange={handle}
                placeholder='Delivery'
              />
              {/* <select
                name="delivery"
                id="delivery"
                value={delivery}
                onChange={handleChange}
                required
              >
                <option value="delivery">Delivery</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select> */}
            </div>
          </div>
        </div>
        <div className='e-btn'>
          <button type='submit' onClick={handleSubmit}>
            UPDATE
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
