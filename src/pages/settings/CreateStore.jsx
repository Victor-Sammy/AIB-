import React, { useRef, useState } from 'react'
import './create-store.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'react-bootstrap'
import { client } from '../../Api/Api'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getStoreItems } from '../../Api/store'

const CreateStore = () => {
  const queryClient = useQueryClient()

  const { data: storeQuery } = useQuery({
    queryKey: ['store'],
    queryFn: () => getStoreItems(),
  })
  console.log(storeQuery)

  const [coverPhoto, setCoverPhoto] = useState('')
  const [storePhoto, setStorePhoto] = useState('')
  const [data, setData] = useState({
    storeName: '',
    location: '',
    description: '',
    delivery: '',
  })

  const option = [
    { label: 'True', value: 'True' },
    { label: 'False', value: 'False' },
  ]

  const { user } = useAuth()
  const userEmail = user.email
  console.log(userEmail)

  const navigate = useNavigate()

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  const filePicekerRef = useRef()
  const filePicekerRef2 = useRef()

  const handleImage = (e) => {
    const selectedFile = []
    const targetFile = e.target.files[0]
    const targetFilesObject = targetFile
    targetFilesObject &&
      selectedFile.push(URL.createObjectURL(targetFilesObject))
    setCoverPhoto(selectedFile)
    console.log(selectedFile)
  }

  const handleImg = (e) => {
    const selectedFile = []
    const targetFile = e.target.files[0]
    const targetFilesObject = targetFile
    targetFilesObject &&
      selectedFile.push(URL.createObjectURL(targetFilesObject))
    setStorePhoto(selectedFile)
    console.log(selectedFile)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()

    // if (pic)
    formData.append('profile_image', storePhoto)
    //formData.append('cover', coverPhoto)
    formData.append('owner', userEmail)
    formData.append('name', data.storeName)
    formData.append('description', data.description)
    formData.append('address', data.location)
    formData.append('delivery', data.delivery)

    client
      .post('/ad/store/', formData, {
        headers: {
          'content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        response.data
        queryClient.invalidateQueries(['store'])
        toast.success('store successfully created')
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

  return (
    <div className='ceateStore-pg'>
      {storeQuery.data.length === 1 && (
        <>
          <h1>You already have a store</h1>
          <p>
            click{' '}
            <NavLink
              style={{ textDecoration: 'underline', color: 'blue' }}
              to='/profile'
            >
              here
            </NavLink>{' '}
            to visit store page
          </p>
        </>
      )}
      <h1 className={storeQuery ? 'blank' : ''}>Create a new store</h1>
      <form
        className={storeQuery.data.length === 1 ? 'blank' : 'form-data'}
        onSubmit={handleSubmit}
      >
        <div className='img'>
          <div className='coverPhoto' id='coverPhoto'>
            {coverPhoto && <img src={coverPhoto} alt='' />}
          </div>
          <div className='storePhoto' id='storePhoto'>
            <img src={storePhoto} alt='' />
          </div>
        </div>
        <button
          className='add_cover'
          onClick={() => filePicekerRef2.current.click()}
        >
          Add Cover Photo
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
        <button
          className='add_store'
          onClick={() => filePicekerRef.current.click()}
        >
          Add Store Photo
        </button>
        <input
          ref={filePicekerRef}
          onChange={(e) => {
            handleImg(e)
          }}
          type='file'
          accept='imag/jpeg,imag/png,imag/gif'
          hidden
        />
        <div className='details'>
          <div className='inputDiv'>
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
            </div>
          </div>
        </div>
        <div className='btn'>
          <button type='submit' onClick={handleSubmit}>
            UPDATE
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateStore
