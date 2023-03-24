import React, { useEffect, useState } from 'react'
import { client } from '../../Api/Api'
import './popup.scss'
import { getStoreItems } from '../../Api/store'

const PopUp = ({ id }) => {
  const [data, setData] = useState({
    name: '',
    price: '',
  })

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const submitData = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('price', data.price)

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
  }

  return (
    <div className='popUp-pg'>
      <p>Please make your changes</p>
      <form onSubmit={submitData}>
        <div className='editForm'>
          <input
            type='text'
            id='name'
            value={data.name}
            onChange={(e) => handle(e)}
            placeholder='**name'
          />
          <input
            type='num'
            id='price'
            value={data.price}
            onChange={(e) => handle(e)}
            placeholder='**price'
          />
        </div>
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default PopUp
