import { ImQuotesRight } from 'react-icons/im'

function Creator () {
  return (
    <div className='min-h-screen w-full bg-1 flex items-center'>
      <div className='flex px-48 items-center w-full '>
        <div className='flex-1  text-white font-serif font-semibold text-4xl'>
          <h1 className='w-80 text-white font-serif font-semibold text-4xl'>THE FUTURE IS ALREADY HERE</h1>
          <div className='w-[26vw] mt-4 flex'>
            <div className='mr-10 text-primary-light'><ImQuotesRight /></div>
            <p className='text-[#8c8c99] text-sm font-montserrat leading-6'>Artificial intelligence is not the only technology that is changing the world of automotive design. E-mobility and automated driving are also creating new opportunities for designers. An interview with Domagoj Dukec head of Design for BMW i and BMW M, about designing the car of the future.</p>
          </div>
        </div>
        <div className='flex-1 flex flex-row pt-80'>
          <div className='z-30'>
            <div className='w-30 mt-10 py-[1px] mb-8 bg-primary-light' />
            <h4 className='text-white font-montserrat font-semibold'>Domagoj</h4>
            <h4 className='text-white font-montserrat font-semibold'>Dukec</h4>
            <p className='text-white font-montserrat text-sm w-30 mt-4'>Head of Design for</p>
            <p className='text-white font-montserrat text-sm w-30'>BMX i and BMW M</p>
          </div>
          <div className='w-80 -ml-12'><img src={`${process.env.PUBLIC_URL}/Image/domagoj-dukec.png`} alt='creator' /></div>
        </div>
      </div>
    </div>
  )
}

export default Creator
