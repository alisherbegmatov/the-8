import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

function Footer () {
  return (
    <footer className='footer z-10 fixed bottom-0 flex justify-between px-12 py-12 w-screen'>
      <a href='https://www.bmwusa.com/special-offers.html'><p className='text-secondary'>© BMW AG 2024</p></a>
      <div className='flex gap-10'>
        <a href='https://www.facebook.com/BMW/'><FaFacebookF className='text-secondary' /></a>
        <a href='https://www.instagram.com/bmw/?hl=en'><BsInstagram className='text-secondary' /></a>
      </div>
    </footer>
  )
}
export default Footer
