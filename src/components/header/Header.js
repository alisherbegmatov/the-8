function Header () {
  return (
    <div className='header top-0 right-0 min-w-[50%] fixed top-0 my-10 bg-none flex flex-col items-end z-10 justify-between'>
      <div className='mt-4  w-full'>
        <div className='flex justify-between'>
          <a href='#Main' className='w-20 h-20 -ml-8 md:w-20 md:h-20'>
            <img src={`${process.env.PUBLIC_URL}/Image/logo.png`} alt='logo' />
          </a>
          <a href='#NewsLetter'>
            <div className='mr-12 hidden md:block'>
              <p className='text-secondary tracking-[.5em] my-2'>TEST DRIVE</p>
              <p className='text-secondary tracking-[.5em]'>ALL BMW</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
