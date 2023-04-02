import { useQuery, useMutation } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { client } from '../../Api/Api'
import { getProductDetails } from '../../Api/products'
import './popup.scss'
import { FaRegTimesCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'

const PopUp = () => {
  const { id } = useParams()
  const { data, isLoading, isError, refetch } = useQuery({
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
    queryKey: ['product', id],
    queryFn: () => getProductDetails(id),
  })
  console.log(data)
  const navigate = useNavigate()

  if (isError) return <h1>Error Loading Products</h1>
  console.log(id)
  const productName = data?.name
  const productPrice = data?.price
  const productImages = data?.images
  console.log(productImages)

  const [selectedImages, setSelectedImages] = useState([])
  const [myData, setMyData] = useState({
    name: `${data ? productName : ''}`,
    price: `${data ? productPrice : ''}`,
  })

  const filePicekerRef = useRef()

  function handle(e) {
    const newdata = { ...myData }
    newdata[e.target.id] = e.target.value
    setMyData(newdata)
  }

  const onSelectFile = async (e) => {
    const selectedFiles = []
    const targetFiles = e.target.files
    const targetFilesObject = [...targetFiles]
    targetFilesObject.map((file) => {
      return selectedFiles.push(URL.createObjectURL(file))
    })
    setSelectedImages(selectedFiles)
  }

  function deleteHandler(e) {
    const del = selectedImages.filter((url, index) => index !== e)
    setSelectedImages(del)
  }

  // const deleteImage = useMutation((id) => {
  //   client.delete(`/ad/products/${id}/images/`)
  // })

  const submitData = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', myData.name)
    formData.append('price', myData.price)

    client
      .put(`/ad/products/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.status, res.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
    setTimeout(() => {
      const formDt = new FormData()
      for (let img of selectedImages) {
        formDt.append('image', img)
      }
      client.post(`/ad/products/${id}/images/`, formDt).then((res) => {
        console.log(res.data)
        toast.success(`${myData.name} has been successfuly updated`)
        navigate('/profile')
      })
    }, 2000)
  }

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <div className='popUp-pg'>
          <p>Please make your changes</p>
          <p style={{ fontWeight: 600 }}>Current Photos</p>
          <div className='img-div'>
            {productImages.map((image) => {
              return (
                <div className='img-display'>
                  <img src={image.image} alt='' />
                  <div
                    className='del-Img'
                    onClick={() =>
                      client
                        .delete(`/ad/products/${id}/images/${image.id}/`)
                        .then((res) => {
                          res.data
                          refetch
                        })
                    }
                  >
                    <FaRegTimesCircle />
                  </div>
                </div>
              )
            })}
          </div>
          <form onSubmit={submitData}>
            <div className='addImg'>
              <input
                type='file'
                ref={filePicekerRef}
                name='uploaded_images'
                multiple
                id='uploaded_images'
                onChange={onSelectFile}
                accept='image/*'
                hidden
              />
              <div
                className='addImgs'
                onClick={() => filePicekerRef.current.click()}
              >
                Add Photos
              </div>
              {selectedImages.map((url, index) => {
                return (
                  <div className='selectedPhotos'>
                    <img src={url} alt='' />
                    <span onClick={() => deleteHandler(index)}>
                      <FaRegTimesCircle />
                    </span>
                  </div>
                )
              })}
            </div>
            <div className='editForm'>
              <input
                type='text'
                id='name'
                value={myData.name}
                onChange={(e) => handle(e)}
                placeholder='**name'
              />
              <input
                type='number'
                id='price'
                value={myData.price}
                onChange={(e) => handle(e)}
                placeholder='**price'
              />
            </div>
            <button type='submit'>update</button>
          </form>
        </div>
      )}
    </>
  )
}

export default PopUp
