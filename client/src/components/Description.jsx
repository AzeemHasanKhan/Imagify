import React from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react";

const Description = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className=' flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className=' text-3xl sm:text-4xl font-semibold mb-2'>Create AI images</h1>
      <p className=' text-gray-500 mb-8'>Turn your Imagination into visual</p>
      <div className=' flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
        <img src={assets.sample_img_1} className=' w-80 xl:w-96 rounded-lg ' alt="" />
        <div>
            <h2 className=' text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className=' text-gray-600 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nam aliquid, sint ipsum inventore minima eveniet rem illo suscipit molestias. Est, veniam nam, laboriosam quis
            </p>
            <p className=' text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima magni earum voluptatem sequi officia eligendi laboriosam dolorem cumque expedita veniam soluta exercitationem est eveniet illum quisquam, placeat at nam ratione aspernatur. Odit placeat ipsam magnam harum, voluptatem, amet illum optio dicta eos praesentium atque! Accusamus quam deserunt dicta molestias magnam mollitia nobis, provident pariatur! Explicabo non quasi sint ipsum.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
