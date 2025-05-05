import ProductContainer from '@/components/products/ProductContainer'
import React from 'react'

const products = async ({searchParams} : {searchParams : {layout?: string, search?: string}}) => {
  const { layout = 'grid' } = await searchParams || {}
  const { search } = await searchParams
  return (
      <ProductContainer layout = {layout} search = {search}/>
  )
}

export default products
