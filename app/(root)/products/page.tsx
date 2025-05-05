import ProductContainer from '@/components/products/ProductContainer'
import React from 'react'

const products = async ({searchParams} : {searchParams : {layout?: string}}) => {
  const { layout = 'grid' } = await searchParams
  return (
      <ProductContainer layout = {layout}/>
  )
}

export default products
