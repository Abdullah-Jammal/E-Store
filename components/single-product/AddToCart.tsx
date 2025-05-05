import React from 'react'
import { Button } from '../ui/button'

function AddToCart({productID} : {productID : string}) {
    console.log(productID)
  return (
    <Button className='capitalize mt-8' size={"lg"}>
        add to cart
    </Button>
  )
}

export default AddToCart
