import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { TextAreaProps } from '@/utils/types'

function TextAreaInput({name, labelText, defaultValue} : TextAreaProps) {
  return (
    <div className='mb-4'>
      <Label className='mb-1' htmlFor={name}>{labelText || name}</Label>
      <Textarea id={name} name={name} defaultValue={defaultValue}
      required className='leading-loose'
      />
    </div>
  )
}

export default TextAreaInput
