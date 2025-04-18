"use client"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto'>
        {gridItems.map(({id, title, description, className, img, spareImg, titleClassName, imgClassName}) => (
          <BentoGridItem 
          id={id} 
          key={id} 
          title={title} 
          description={description} 
          className={className}
          img={img}
          spareImg={spareImg}
          titleClassName={titleClassName}
          imgClassName={imgClassName}
           />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
