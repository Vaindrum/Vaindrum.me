"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div> */}
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple-300'>your outside digital presence to a new level?</span>
            </h1>
            <p className='text-white-100 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
            <a href="mailto:vaibhavraj8587@gmail.com">
                <MagicButton 
                title="Get in touch"
                icon={<FaLocationArrow />}
                position="right"
                /> 
            </a>
        </div>
      
      <div className='flex flex-col items-center justify-between mt-16 md:flex-row '>
        <p className='md:text-base text-sm md:font-normal font-light'>
            Copyright &copy; {new Date().getFullYear()} Vaibhav Raj. All rights reserved.
            </p>
        <div className='flex items-center md:gap-3'>
        {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
        ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
