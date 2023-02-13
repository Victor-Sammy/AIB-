import React, { useState } from 'react'
import '../../sass/pages/addImages.scss'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
//import API from './API'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddImages = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    subCategory: localStorage.getItem('subCategory')
      ? localStorage.getItem('subCategory')
      : 'no-subCategory',
  })
  const [errors, setErrors] = useState({
    selectedImages: '',
  })

  const url = 'ttp://6fcf-155-94-250-124.ngrok.io/ad/products/'

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
    formData.append('subCategory', data.subCategory)

    axios
      .post(
        url,
        formData
        //   {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // }
      )
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

    // Compress.imageFileResizer(
    //   selectedFiles,
    //   480,
    //   480,
    //   'JPEG',
    //   'JPG',
    //   'PNG',
    //   100,
    //   0,
    //   (uri) => {
    //     console.log(uri)
    //     setSelectedImages(uri)
    //   },
    //   'base64'
    // )
  }

  // const getbase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader()
  //     fileReader.readAsDataURL(file)

  //     fileReader.onload = () => {
  //       resolve(fileReader.result)
  //     }

  //     fileReader.onerror = (error) => {
  //       reject(error)
  //     }
  //   })
  // }

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image))
    URL.revokeObjectURL(image)
  }
  return (
    <div className='add-products'>
      <form onSubmit={submitData}>
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
        <div className='prdtForm'>
          <div className='div1'>
            <div className='inputss'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                id='name'
                value={data.name}
                onChange={(e) => handle(e)}
              />
            </div>
            <div className='inputss'>
              <label htmlFor=''>Price</label>
              <input
                type='int'
                id='price'
                value={data.price}
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className='div2'>
            <label htmlFor=''>Description</label>
            <textarea
              type='text'
              id='description'
              value={data.description}
              onChange={(e) => handle(e)}
            ></textarea>
          </div>
        </div>

        <div className='input-subC'>
          <label htmlFor=''>Sub Category</label>
          <input type='text' id='subCategory' value={data.subCategory} />
        </div>
        <button type='submit'>Continue</button>
      </form>
    </div>
  )
}

export default AddImages
