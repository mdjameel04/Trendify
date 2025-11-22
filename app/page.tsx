import React from 'react'
import Image from 'next/image'
import ProductList from '@/Components/ProductList'

const HomePage = () => {
  return (
    <div className=' md:px-20'>
<div className='relative aspect-3/1'>
<Image  src="/hero-image.png" alt='hero' fill />
</div>

<ProductList/>  

    </div>
  )
}

export default HomePage