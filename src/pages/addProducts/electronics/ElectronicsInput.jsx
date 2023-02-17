import React, { useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import env from '../../../../src/Api'

const ElectronicsInput = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    condition: '',
    subCategory: localStorage.getItem('subCategory')
      ? localStorage.getItem('subCategory')
      : 'no-subCategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

  //const url = 'https://aib-shop.up.railway.app/ad/products/'

  const { API_URL } = env

  //const navigate = useNavigate()

  const token = localStorage.getItem('accessToken')

  const submitData = async (e) => {
    e.preventDefault()
    console.log(selectedImages)

    const formData = new FormData()
    for (let img of selectedImages) {
      formData.append('uploaded_images', img)
    }
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('brand', data.brand)
    formData.append('condition', data.condition)
    formData.append('subCategory', data.subCategory)

    const requestOptions = {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      //   Authentication: token,
      // },
      body: formData,
    }
    fetch(`${API_URL}/ad/products/`, requestOptions)
      .then((res) => {
        console.log(res.status, res.data)
        if (res.status === 400) {
          console.log(res.data)
          setErrors(res.data)
        }
        //navigate('/addProducts')
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const handle = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const onSelectFile = async (e) => {
    setSelectedImages(e.target.files)
    //const selectedFiles = e.target.files[0]
    //const file = newData[0]
    //const base64 = await getbase64(file)
    //console.log(base64)

    // const selectedFilesArray = Array.from(selectedFiles)

    // const imagesArray = selectedFilesArray.map((file) => {
    //   return URL.createObjectURL(file)
    // })
    // setSelectedImages((previousImages) => previousImages.concat(imagesArray))
    // // for bug in chrome
    // e.target.value = ''
  }

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image))
    URL.revokeObjectURL(image)
  }

  return (
    <div className='input-div'>
      <div className='aboutPrdt'>
        Customers want to know more about your product{' '}
      </div>
      <form onSubmit={submitData} className='product-attributes'>
        <div className='div-cover'>
          <div className='add-image-display'>
            <div className='file-cc'>
              <div className='file-card'>
                <div className='file-input'>
                  <input
                    type='file'
                    name='uploaded_images'
                    multiple
                    onInvalid={errors.selectedImages}
                    id='uploaded_images'
                    onChange={onSelectFile}
                    accept='image/*'
                  />
                  <button>
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </div>
              <p>**up to 4 or 5 photos!</p>
            </div>
          </div>
          {errors.selectedImages && <div>ps:{errors.selectedImages}</div>}
        </div>
        <div className='form1'>
          <div className='input'>
            <p>Name</p>
            <input
              type='text'
              id='name'
              value={data.name}
              onChange={handle}
              //required
            />
          </div>
          <div className='input'>
            <p>Price</p>
            <input
              type='text'
              id='price'
              value={data.price}
              onChange={handle}
              //required
            />
          </div>
          <div className='description'>
            <textarea
              id='description'
              type='text'
              value={data.description}
              onChange={handle}
              placeholder='**Additional Description'
            ></textarea>
            <p>**not more than 150 characters</p>
          </div>
        </div>
        <h1>more description</h1>
        <div className='formDescription'>
          <div className='div-flex'>
            <div className='box1'>
              <p>Brand</p>
              <input
                type='text'
                id='brand'
                value={data.brand}
                onChange={handle}
                required
              />
            </div>
            <div className='box2'>
              <p>Condition</p>
              <input
                type='text'
                id='condition'
                value={data.condition}
                onChange={handle}
                disabled
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box3'>
              <p>Sub Category</p>
              <input
                type='text'
                id='subCategory'
                value={data.subCategory}
                style={{ backgroundColor: '#e2d8d8' }}
              />
            </div>
          </div>
          <button
            type='submit'
            style={{
              width: '200px',
              height: '50px',
              borderRadius: '10px',
              backgroundColor: '#fe7702',
              color: '#fff',
              marginLeft: '43%',
              marginTop: '50px',
              marginBottom: '50px',
            }}
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  )
}

export default ElectronicsInput
