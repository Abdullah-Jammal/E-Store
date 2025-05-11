import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput({name = "image"} : {name : string}) {
  return (
    <div className='mb-4'>
      <Label htmlFor='image' className='mb-1'>image</Label>
      <Input id={name} type='file' name={name} 
       required accept='image/*' />
    </div>
  )
}

export default ImageInput
