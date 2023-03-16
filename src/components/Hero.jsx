import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import { isBrowser } from 'framer-motion';

const Hero = () => {
  if(isBrowser){
    return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
  
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hola!, soy <span className='text-[#915eff]'>Emerson</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Desarrollo <br className='sm:block hidden' />
              aplicaciones de escritorio, web y android.
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className='absolute xs:bottoms-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#acerca">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0,24,0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    )
  }else{
    return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
  
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Emerson</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop<br className='sm:block hidden' />
              web applications, API's and mobile apps  
            </p>
          </div>
        </div>
        <img 
          className='w-full h-full object-cover object-center sm:h-auto sm:max-w-none sm:w-auto'
          src="https://media.licdn.com/dms/image/D4E16AQHCl3UuCwALfw/profile-displaybackgroundimage-shrink_350_1400/0/1663123855362?e=1684368000&v=beta&t=HD3QqDDzyD62HqBeDbfvFa99LRuIvRmg-MchZcjeopc" alt="linkdn" />
        <div className='absolute xs:bottoms-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0,24,0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    )
  }
  
}

export default Hero