import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { PriceFormatProps } from '@/utils/types'


function PriceInput({name, defaultValue} : PriceFormatProps) {
  return (
    <div className='mb-4'>
      <Label htmlFor='price' className='mb-1'>price ($)</Label>
      <Input id={name} type='number' name={name || "price"} min={0} 
      defaultValue={defaultValue || 100} required/>
    </div>
  )
}

export default PriceInput
