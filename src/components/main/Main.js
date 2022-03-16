import React, { useState, useEffect } from 'react'

function Main () {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  function handleScroll (e) {
    setScrollY(window.pageYOffset)
    const bg = document.getElementsByClassName('Main')
    if (scrollY > 800) {
      bg[0].style.backgroundSize = 80 + '%'
    } else {
      bg[0].style.backgroundSize = 80 + scrollY / 50 + '%'
    }
  }
  return (
    <div id='Main' className='Main min-h-screen bg-1 bg-no-repeat bg-contain bg-[right_-5em_bottom]'>
      <div className='w-2/5 flex flex-wrap content-center min-h-screen ml-12'>
        <p className='text-secondary'>High class. High performance. High expectations.</p>
        <h1 className='text-white font-montserrat font-semibold text-5xl mt-5 mb-10'>WHAT CAUSES NORTHERN LIGHTS <span className='text-primary-light'>PHENOMENA?</span></h1>
        <a href='#Information'>
          <div className='w-1 whitespace-nowrap hover:bg-gradient-to-r from-primary-light to-secondary-light hover:w-64 duration-500 px-10 py-2'>
            <h4 className='text-white text-center font-montserrat font-semibold tracking-widest'>EXPLORE FUTURE</h4>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Main
