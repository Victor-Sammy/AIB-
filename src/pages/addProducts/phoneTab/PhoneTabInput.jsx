import React, { useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { client } from '../../../Api/Api'
import { toast } from 'react-toastify'

function PhoneTabInput() {
  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    model: '',
    condition: '',
    ram: '',
    screenSize: '',
    color: '',
    opSystem: '',
    sim: '',
    battery: '',
    camera: '',
    subCategory: localStorage.getItem('sub-cat')
      ? localStorage.getItem('sub-cat')
      : 'no-subCategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

  const navigate = useNavigate()

  const submitData = async (e) => {
    e.preventDefault()
    console.log(selectedImages)

    const storeID = localStorage.getItem('store-id')
    const categoryID = localStorage.getItem('category-id')
    const subCatID = localStorage.getItem('sub-cat')

    const formData = new FormData()
    formData.append('store', storeID)
    formData.append('subcategory', subCatID)
    formData.append('category', categoryID)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('brand', data.brand)
    formData.append('model', data.model)
    formData.append('condition', data.condition)
    formData.append('ram', data.ram)
    formData.append('color', data.color)
    formData.append('sim', data.sim)
    formData.append('battery', data.battery)
    formData.append('camera', data.camera)
    formData.append('operating system', data.opSystem)
    formData.append('screen size', data.screenSize)

    client
      .post('/ad/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.status, res.data)
        localStorage.setItem('prd-id', res.data.id)
        if (res.status === 400) {
          setErrors(res.data)
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
    setTimeout(() => {
      const prdID = localStorage.getItem('prd-id')
      const formDt = new FormData()
      for (let img of selectedImages) {
        formDt.append('image', img)
      }
      client.post(`/ad/products/${prdID}/images/`, formDt).then((res) => {
        console.log(res.data)
        toast.success(`${data.name} has been successfuly added to store`)
        localStorage.removeItem('prd-id')
        navigate('/profile')
      })
    }, 3000)
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const onSelectFile = async (e) => {
    const selectedFiles = []
    const targetFiles = e.target.files
    const targetFilesObject = [...targetFiles]
    targetFilesObject.map((file) => {
      return selectedFiles.push(URL.createObjectURL(file))
    })
    setSelectedImages(selectedFiles)
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

  function deleteHandler(e) {
    const del = selectedImages.filter((url, index) => index !== e)
    setSelectedImages(del)
    console.log(del)
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
            {selectedImages.map((url, index) => {
              return (
                <div className='preview-div'>
                  <div className='img-preview' id='img-preview'>
                    <img src={url} alt='' />
                    <span onClick={() => deleteHandler(index)}>
                      <AiTwotoneDelete />
                    </span>
                  </div>
                </div>
              )
            })}
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
              onChange={(e) => handle(e)}
              //required
            />
          </div>
          <div className='input' id='input'>
            <p>Price</p>
            <input
              type='text'
              id='price'
              value={data.price}
              onChange={(e) => handle(e)}
              //required
            />
          </div>
          <div className='description' id='description'>
            <textarea
              id='description'
              type='text'
              value={data.description}
              onChange={(e) => handle(e)}
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
                onChange={(e) => handle(e)}
                required
              />
            </div>
            <div className='box2'>
              <p>Model</p>
              <input
                type='text'
                id='model'
                value={data.model}
                onChange={(e) => handle(e)}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box3'>
              <p>RAM</p>
              <input
                type='text'
                id='ram'
                value={data.ram}
                onChange={(e) => handle(e)}
                required
              />
            </div>
            <div className='box4'>
              <p>Condition</p>
              <input
                type='text'
                id='condition'
                value={data.condition}
                onChange={(e) => handle(e)}
                required
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box5'>
              <p>Sub-Category</p>
              <input
                type='text'
                id='subCategory'
                value={data.subCategory}
                style={{ backgroundColor: '#e2d8d8' }}
                //required
              />
            </div>
            <div className='box6'>
              <p>Screen Size</p>
              <input
                type='text'
                id='screenSize'
                value={data.screenSize}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box7'>
              <p>Color</p>
              <input
                type='text'
                id='color'
                value={data.color}
                onChange={(e) => handle(e)}
                //required
              />
            </div>
            <div className='box8'>
              <p>Operating System</p>
              <input
                type='text'
                id='opSystem'
                value={data.opSystem}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className='div-flex'>
            <div className='box9'>
              <p>SIM</p>
              <input
                type='text'
                id='sim'
                value={data.sim}
                onChange={(e) => handle(e)}
                //required
              />
            </div>
            <div className='box10'>
              <p>Battery</p>
              <input
                type='text'
                id='battery'
                value={data.battery}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className='div-flex'>
            <div>
              <p>Camera</p>
              <input
                type='text'
                id='camera'
                value={data.camera}
                onChange={(e) => handle(e)}
                //required
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

export default PhoneTabInput
