import { ProductsGridProps } from '@/utils/types'
import Link from 'next/link';
import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { links } from '@/utils/links';
import EmptyList from '../global/EmptyList';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';

const ProductsList = ({ products }: ProductsGridProps) => {
  if(products.length === 0) {
    return <EmptyList title="There are no products!" className="mt-6 font-bold tracking-wider"/>
  }

  return (
    <section className="pt-10 grid grid-cols-1 gap-4 pb-2">
      {products?.map((product) => {
        const productId = product.id ;
        return (
          <div className="group relative" key={product.id}>
            <Link href={`${links.PRODUCTS.href}/${product.id}`}>
              <Card className="transform group-hover:shadow-xl bg-transparent transition-shadow duration-200">
                <CardContent className="flex items-center gap-12">
                  <div className="relative md:h-48 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-12">
                    <div>
                    <h2 className="text-lg capitalize">{product.name}</h2>
                    <p className='text-muted-foreground text-xs line-clamp-2 w-96'>{product.description}</p>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="absolute bottom-7 right-7">
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsList
