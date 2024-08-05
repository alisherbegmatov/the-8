function Design () {
  return (
    <div id='Design' className='min-h-screen bg-1 bg-[left_-112em_top_-30em] bg-no-repeat flex items-center justify-between'>
      <div className='flex flex-row items-center h-[60vh] mt-12'>
        <div className='w-[45vw] h-full relative'><img className='absolute' src={`${process.env.PUBLIC_URL}/Image/3.jpg`} alt='design1' /></div>
        <div className='w-80 h-full relative'><img className='absolute -left-20 bottom-14' src={`${process.env.PUBLIC_URL}/Image/7.jpg`} alt='design2' /></div>
        <div className='w-96 h-full flex flex-col relative'>
          <div className='absolute -left-20 h-44'><img className='w-[30vw] h-44 object-cover' src={`${process.env.PUBLIC_URL}/Image/10.jpg`} alt='design3' /></div>
          <div className='absolute top-60 h-full mt-24'>
            <div className='w-44 py-[1px] mb-8 bg-primary-light' />
            <p className='text-[#6B6C6C] font-montserrat'>A completely new language of forms with fewer, yet more precise lines, a larger kidney grille, and a more luxurious interior.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Design
