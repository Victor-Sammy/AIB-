import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../../sass/components/_subCatOpt.scss'

const Animals = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    breed: '',
    age: '',
    gender: '',
    condition: '',
    subCategory: localStorage.getItem('subCategory')
      ? localStorage.getItem('subCategory')
      : 'no-subCategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

  const url = 'https://5b3c-154-120-110-145.ngrok.io/ad/products/'

  //const navigate = useNavigate()

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
    formData.append('breed', data.breed)
    formData.append('age', data.age)
    formData.append('gender', data.gender)
    formData.append('condition', data.condition)
    formData.append('subCategory', data.subCategory)

    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.status, res.data)
        if (res.status === 400) {
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
        Customers want to know more about your pet{' '}
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
              <p>Breed</p>
              <input
                type='text'
                id='brand'
                value={data.breed}
                onChange={handle}
                required
              />
            </div>
            <div className='box2'>
              <p>Gender</p>
              <input
                type='text'
                id='model'
                value={data.gender}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box3'>
              <p>Age</p>
              <input
                type='text'
                id='ram'
                value={data.age}
                onChange={handle}
                required
              />
            </div>
            <div className='box4'>
              <p>Condition</p>
              <input
                type='text'
                id='condition'
                value={data.condition}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='outstanding'>
            <p>Sub Category</p>
            <input
              type='text'
              id='subCategory'
              value={data.subCategory}
              style={{ backgroundColor: '#e2d8d8' }}
            />
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

export default Animals
