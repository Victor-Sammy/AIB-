import React, { useEffect, useState } from 'react'
import '../../sass/pages/demo.scss'
import { ScaleLoader } from 'react-spinners'

function Demo() {
  const [Data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const override = `
    display: flex;
    align-items: center;
    justify-content: center;    
    border-color: red;
  `

  const getDataFromStorage = () => {
    try {
      const arrayOfData = localStorage.getItem('user')
      const d = arrayOfData !== null ? JSON.parse(arrayOfData) : []
      setLoading(false)
      setData(d)
      console.log(d.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFromStorage()
  })

  return (
    <>
      <div className='demo'>
        {loading ? (
          <ScaleLoader
            css={override}
            size={150}
            color={'#eb4034'}
            loading={loading}
          />
        ) : (
          <h1>hello</h1>
        )}
      </div>
      <div>
        {Data.reduce((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </>
  )
}

export default Demo
