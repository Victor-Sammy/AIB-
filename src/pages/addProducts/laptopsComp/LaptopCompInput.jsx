import React, { useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LaptopCompInput = () => {
  const url = 'https://cd3e-154-120-92-61.ngrok.io/test/phonetest/'

  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    model: '',
    processor: '',
    condition: '',
    ram: '',
    storageCapacity: '',
    os: '',
    color: '',
    subCategory: localStorage.getItem('subCategory')
      ? localStorage.getItem('subCategory')
      : 'no-subcategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

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
    formData.append('brand', data.brand)
    formData.append('model', data.model)
    formData.append('processor', data.processor)
    formData.append('condition', data.condition)
    formData.append('ram', data.ram)
    formData.append('color', data.color)
    formData.append('operating system', data.os)
    formData.append('storage capacity', data.storageCapacity)
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

  function handle(e) {
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
              <p>Model</p>
              <input
                type='text'
                id='model'
                value={data.model}
                onChange={handle}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box3'>
              <p>Processor</p>
              <input
                type='text'
                id='Processor'
                value={data.processor}
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
          <div className='div-flex'>
            <div className='box5'>
              <p>Sub Category</p>
              <input
                type='text'
                id='subCategory'
                value={data.subCategory}
                style={{ backgroundColor: '#e2d8d8' }}
              />
            </div>
            <div className='box6'>
              <p>RAM</p>
              <input type='text' id='ram' value={data.ram} onChange={handle} />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box7'>
              <p>Storage Capacity</p>
              <input
                type='text'
                id='StorageCapacity'
                value={data.storageCapacity}
                onChange={handle}
                //required
              />
            </div>
            <div className='box8'>
              <p>Operating System</p>
              <input type='text' id='os' value={data.os} onChange={handle} />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box9'>
              <p>Color</p>
              <input
                type='text'
                id='Color'
                value={data.color}
                onChange={handle}
                //required
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

export default LaptopCompInput
