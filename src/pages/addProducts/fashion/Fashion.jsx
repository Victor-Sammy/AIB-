import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../../sass/components/_subCatOpt.scss'

const Fashion = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    gender: '',
    size: '',
    sleeveLength: '',
    color: '',
    condition: '',
    subCategory: localStorage.getItem('sub-cat')
      ? localStorage.getItem('sub-cat')
      : 'no-subCategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

  const url = 'https://aib-shop.up.railway.app/ad/products/'

  //const navigate = useNavigate()

  //const token = localStorage.getItem('accessToken')

  const submitData = async (e) => {
    e.preventDefault()
    console.log(selectedImages)

    const storeID = localStorage.getItem('store-id')
    const categoryID = localStorage.getItem('categoryID')
    const subCatID = localStorage.getItem('subcatID')

    const formData = new FormData()
    for (let img of selectedImages) {
      formData.append('uploaded_images', img)
    }
    formData.append('store', storeID)
    formData.append('subcategory', subCatID)
    formData.append('category', categoryID)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('brand', data.brand)
    formData.append('gender', data.gender)
    formData.append('size', data.size)
    formData.append('sleeve_lenght', data.sleeveLength)
    formData.append('color', data.color)
    formData.append('condition', data.condition)

    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.status)
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
    <div className='input-div' id='input-div'>
      <form onSubmit={submitData} className='product-attributes'>
        <div className='div-cover' id='div-cover'>
          <h2>Add Photo</h2>
          <div className='add-image-display' id='add-image-display'>
            <div className='file-cc' id='file-cc'>
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
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <h5>
                *Uploaded images should not be above 5MB, and in “jpg” or “png”
                format. Add 3 Photos or more.
              </h5>
            </div>
          </div>
          {errors.selectedImages && <div>ps:{errors.selectedImages}</div>}
        </div>
        <div className='form1' id='form1'>
          <div className='input' id='input'>
            <p>Name</p>
            <input
              type='text'
              id='name'
              value={data.name}
              onChange={handle}
              //required
            />
          </div>
          <div className='input' id='input'>
            <p>Price</p>
            <input
              type='text'
              id='price'
              value={data.price}
              onChange={handle}
              //required
            />
          </div>
          <div className='description' id='description'>
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
        <h1>Additional description</h1>
        <div className='formDescription' id='formDescription'>
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
              <p>Gender</p>
              <input
                type='text'
                id='gender'
                value={data.gender}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box3'>
              <p>Size</p>
              <input
                type='text'
                id='size'
                value={data.size}
                onChange={handle}
                required
              />
            </div>
            <div className='box4'>
              <p>Sleeve Length [optional]</p>
              <input
                type='text'
                id='sleeveLength'
                value={data.sleeveLength}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box5'>
              <p>Color [optional]</p>
              <input
                type='text'
                id='color'
                value={data.color}
                onChange={handle}
                required
              />
            </div>
            <div className='box6'>
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
          <div className='div-flex'>
            <div className='box7'>
              <p>Sub Category</p>
              <input
                type='text'
                id='subCategory'
                disabled
                value={data.subCategory}
                style={{ backgroundColor: '#e2d8d8' }}
              />
            </div>
          </div>
        </div>
        <div className='upload-div' id='upload-div'>
          <button type='submit' className='uploadBtn' id='uploadBtn'>
            Upload
          </button>
        </div>
      </form>
    </div>
  )
}

export default Fashion
