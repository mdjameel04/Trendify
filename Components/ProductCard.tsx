import { productType } from '@/utils/assets'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}:{product:productType} ) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      <Link href={`/products/${product.id}`}>
      <div className='relative aspect-[2/3]'>
   <Image src={product.images[product.colors[0]]} alt={product.name} fill className='object-cover'    sizes='(max-width: 640px) 50vw,(max-width: 1024px) 33vw,  (max-width: 1280px) 25vw, 200px' />
      </div>
      </Link>
    </div>
  )
}

export default ProductCard   