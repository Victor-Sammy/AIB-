import React from 'react'
import './category.scss'

import Animals from '../../components/category/animals'
import Automobile from '../../components/category/automobile'
import Commercial from '../../components/category/commercial'
import Electronics from '../../components/category/electronics'
import Fashion from '../../components/category/fashion'
import Food from '../../components/category/food'
import Furniture from '../../components/category/furniture'
import Health from '../../components/category/health'
import Kids from '../../components/category/kids'
import Musical from '../../components/category/musical'
import Phone from '../../components/category/phone'
import Sporting from '../../components/category/sporting'

import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  let Component
  const { category } = useParams()

  switch (category) {
    case 'fashion':
      Component = <Fashion />
      break
    case 'animals':
      Component = <Animals />
      break
    case 'automobile':
      Component = <Automobile />
      break
    case 'commercial':
      Component = <Commercial />
      break
    case 'electronics':
      Component = <Electronics />
      break
    case 'food':
      Component = <Food />
      break
    case 'furniture':
      Component = <Furniture />
      break
    case 'health':
      Component = <Health />
      break
    case 'kids':
      Component = <Kids />
      break
    case 'musical':
      Component = <Musical />
      break
    case 'phone':
      Component = <Phone />
      break
    case 'sporting':
      Component = <Sporting />
      break
    default:
      break
  }
  return <div>{Component}</div>
}

export default CategoryPage
