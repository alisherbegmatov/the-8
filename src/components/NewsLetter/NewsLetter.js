import './NewsLetter.css'

function NewsLetter () {
  return (
    <div id='NewsLetter' className='NewsLetter min-h-screen bg-1 bg-1 bg-[left_-90em_top_-30em] bg-no-repeat flex items-center'>
      <div className='flex flex-row w-full mt-10'>
        <div className='flex-1 flex gap-4'>
          <div className='flex flex-row items-center'>
            <img className='w-96 h-54' src={`${process.env.PUBLIC_URL}/Image/9.jpg`} alt='newsletter1' />
          </div>
          <div className='mt-20'>
            <a href='https://www.bmwusanews.com/homepage.do'>
              <div className='newsLetter relative'>
                <img className='object-cover w-40 h-40 mb-4' src={`${process.env.PUBLIC_URL}/Image/4.jpg`} alt='newsletter2' />
                <h6 className='text-white absolute top-4 left-4 z-10 font-montserrat font-semibold tracking-widest'>NEWS</h6>
                <h6 className='text-white absolute top-10 left-4 z-10 font-montserrat font-semibold tracking-widest'>LETTER</h6>
              </div>
            </a>
            <img className='object-cover w-64 h-64' src={`${process.env.PUBLIC_URL}/Image/11.jpg`} alt='newsletter3' />
          </div>

        </div>
        <div className='flex-1'>
          <h4 className='text-white font-montserrat tracking-[10px]'>AUTOMOTIVE LIVE</h4>
          <h1 className='text-white my-4 font-montserrat font-semibold text-6xl'>BMW M8</h1>
          <h2 className='text-white font-serif font-semibold text-4xl'>Incomparable</h2>
          <h2 className='text-white font-serif font-semibold text-4xl'>Aura</h2>

          <div className='w-96 mt-20 ml-20'>
            <span className='text-secondary'>Exclusive palette. The supremely striking impression of the BMW M8 Gran Coupe First Edition 1 of 8 is enhanced by the exclusive graduated paint finish Saleve Vert.</span>
            <a href='#Information'>
              <div className='w-1 whitespace-nowrap hover:bg-gradient-to-r from-primary-light to-secondary-light hover:w-64 duration-500 px-10 py-2 my-8'>
                <h4 className='text-white text-center font-montserrat font-semibold tracking-widest'>EXPLORE FUTURE</h4>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter
