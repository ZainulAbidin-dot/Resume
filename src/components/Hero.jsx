import { motion } from 'framer-motion'
import React from 'react'
import { ComputersCanvas, ParticleRing } from './canvas'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] bottom-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Zain ul Abidin</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Tech Enthusiast Building Solutions  <br className='sm:block hidden' /> That Matter
          </p>
        </div>
      </div>
      {/* <ParticleRing /> */}
      <div className='absolute top-[350px] left-[50%] sm:top-[27%] sm:left-[70%] transform -translate-x-1/2'>
        <ComputersCanvas />
      </div>

      <div className='top-[550px] absolute w-full flex justify-center items-center hidden md:flex md:top-[550px] md:bottom-auto xs:bottom-10 bottom-32 '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{
              y: [0, 24, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero