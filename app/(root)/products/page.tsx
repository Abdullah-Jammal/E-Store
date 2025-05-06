import ProductContainer from '@/components/products/ProductContainer'
import React from 'react'

const products = async ({searchParams} : {searchParams : {layout?: string, search?: string}}) => {
  const { layout = 'grid', search = '' } = searchParams || {};
  return (
      <ProductContainer layout = {layout} search = {search}/>
  )
}

export default products
