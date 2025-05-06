/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductContainer from '@/components/products/ProductContainer'
import React from 'react'

const products = async ({searchParams} : any) => {
  const { layout = 'grid', search = '' } = searchParams || {};
  return (
      <ProductContainer layout = {layout} search = {search}/>
  )
}

export default products
