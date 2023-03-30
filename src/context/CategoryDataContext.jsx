import { createContext, useState } from 'react'
import { client } from '../Api/Api'
import AddCategory from '../pages/addProducts/addSubCategories/AddCategory'

const CategoryContext = createContext()
CategoryContext.displayName = 'CategoryContext'

export function CategoryApi() {
  const [categoryData, setCategoryData] = useState([])
  const apiCall = () => {
    client.get('/ad/categories/').then((response) => {
      const res = response.data
      setCategoryData(res)
    })
  }
  return (
    <CategoryContext.Provider value={{ categoryData, apiCall }}>
      <AddCategory />
    </CategoryContext.Provider>
  )
}
