import React from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-24'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl leading-8 text-lg text-muted-foreground'>
        Discover beautifully crafted pieces that blend comfort, style, and durability. From elegant sofas to serene bedroom sets, our collection brings warmth and personality to every room. Shop now and create the home you’ve always dreamed of.
        </p>
        <Button asChild className='mt-8 bg-blue-500 text-white' size={"lg"}>
          <Link href={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
