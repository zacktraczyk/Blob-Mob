import React from 'react'
import logo from '@Assets/favicon.svg'

const About: React.FC = () => {
  return (
    <div className='flex h-3/5 w-[36rem] flex-col items-center justify-evenly rounded-3xl bg-card px-20 py-5 '>
      <h2 className='text-3xl font-bold'>ABOUT</h2>
      <p className='leading-8'>
        <span className='font-bold'>Howdy There!</span> This game was one of my first coding
        projects, and I originally made it using a single file of javascript and some boilerplate
        HTML.
      </p>
      <p className='leading-8'>
        The game has evolved a lot since then, using typescript for the core game and React for the
        UI components.
      </p>
      <p className='leading-8'>
        You can look at the code below, or visit my website to see other my other projects.
      </p>
      <p className='w-full text-right'>-- Zack Traczyk</p>
      <div className='flex h-10 w-full items-center justify-around'>
        <a
          href='https://github.com/xxzbuckxx/Blob-Mob'
          target='_blank'
          className='flex items-center gap-2 rounded-xl border-4 border-text-main py-2 px-3'
          rel='noreferrer'
        >
          View Code <i className='fa-brands fa-github fa-2xl'></i>
        </a>
        <a
          href='http://zacktraczyk.com'
          target='_blank'
          className='flex items-center gap-2 rounded-xl border-4 border-orange py-2 px-3 text-orange'
          rel='noreferrer'
        >
          My Website <img src={logo} alt='Zack Traczyk logo' className='h-7' />
        </a>
      </div>
    </div>
  )
}

export default About
