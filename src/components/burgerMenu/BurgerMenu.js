import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import cars from '../../utils/bmw.json'

function BurgerMenu () {
  const [menuOpen, setMenuOpen] = useState(false)
  function handleClick (e) {
    e.preventDefault()
    setMenuOpen(!menuOpen)
    const menu = document.getElementsByClassName('menu')
    const burger1 = document.getElementById('burger1')
    const burger2 = document.getElementById('burger2')

    if (menuOpen) {
      menu[0].style.transform = 'translateX(100%)'
      burger1.style.transform = 'rotate(0deg)'
      burger2.style.transform = 'rotate(0deg)'
    } else {
      menu[0].style.transform = 'none'
      burger1.style.transform = 'rotate(45deg) translate(10px, 2px)'
      burger2.style.transform = 'rotate(-45deg) translate(5px, 2px)'
    }
  }
  const carList = Object.keys(cars).map((car, index) => {
    const carObj = cars[car]
    return (
      <a href='#Gallery' key={carObj.model}>
        <li className='hover:text-primary-light flex gap-8 items-center' key={carObj.model}>
          <img className='w-auto h-10' src={`${process.env.PUBLIC_URL}/Image/${carObj.src}`} alt={carObj.model} />
          <span>{carObj.model}</span>
        </li>
      </a>
    )
  })
  return (
    <div className='burger-menu absolute z-20 right-10 top-[50vh]'>
      <div className='fixed flex flex-col z-40 w-4 mr-8 right-10 hover:cursor-pointer' onClick={handleClick}>
        <span id='burger1' className='px-5 py-[1.5px] my-2 bg-primary-light rounded z-40' />
        <span id='burger2' className='px-5 py-[1.5px] bg-primary-light rounded z-40' />
      </div>
      <ul className='menu fixed top-0 right-0 min-w-[50vw] min-h-screen bg-primary-dark z-20 flex flex-col justify-around origin-[0%_0%] translate-x-[100%] transition'>
        <div className='flex flex-row justify-between px-10'>
          <div className='flex flex-row ml-20'>
            <input className='bg-transparent border-b-2 border-secondary text-sm pb-2 w-56' placeholder='Search' />
            <AiOutlineSearch className='text-secondary text-2xl -ml-6 mb-2' />
          </div>
          <BsGlobe className='text-secondary text-2xl' />
        </div>
        <div className='text-white tracking-[.3em] leading-[3.5em] px-28 font-montserrat font-semibold z-40'>
          {cars && carList}
        </div>
        <div className='px-28'>
          <a className='hover:text-primary-light text-white tracking-[.3em] leading-[3.3em] font-montserrat font-semibold' href='#Gallery'>
            <li className='flex'>
              <div className='w-24 h-24 mr-8'>
                <img src={`${process.env.PUBLIC_URL}/Image/37.jpg`} alt='BMW i8' />
              </div>
              <span>BMW i8 & BMW i8 Roadster</span>
            </li>
          </a>
          <p className='text-secondary text-md'>The future is here</p>
          <a href='#NewsLetter' className='hover:pointer'>
            <p className='text-primary-light font-montserrat font-semibold text-md my-12 z-40'>Latest News</p>
          </a>
        </div>
      </ul>
    </div>
  )
}

export default BurgerMenu
