import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../../Api/Api'
import { getProductDetails } from '../../Api/products'
import './popup.scss'

const PopUp = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductDetails(id),
  })
  console.log(data?.data)

  const { data: productImages } = useQuery({
    queryKey: ['product-images'],
    queryFn: () => client.get(`/ad/products/${id}/images/`),
  })
  console.log(productImages)

  if (isError) return <h1>Error Loading Products</h1>
  console.log(id)
  const productName = data?.data?.name
  const productPrice = data?.data?.price

  const [selectedImages, setSelectedImages] = useState([])
  const [myData, setMyData] = useState({
    name: `${data ? productName : ''}`,
    price: `${data ? productPrice : ''}`,
  })

  function handle(e) {
    const newdata = { ...myData }
    newdata[e.target.id] = e.target.value
    setMyData(newdata)
    console.log(newdata)
  }

  const onSelectFile = async (e) => {
    setSelectedImages(e.target.files)
  }

  const submitData = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    for (let img of selectedImages) {
      formData.append('uploaded_images', img)
    }
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
        //navigate('/addProducts')
        // setTimeout(() => {
        //   getStoreItems()
        // }, 500)
      })
      .catch((error) => {
        console.log(error.response)
      })
    close()
  }

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <div className='popUp-pg'>
          <p>Please make your changes</p>
          <form onSubmit={submitData}>
            <div className='addImg'>
              <input
                type='file'
                name='uploaded_images'
                multiple
                id='uploaded_images'
                onChange={onSelectFile}
                accept='image/*'
              />
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
