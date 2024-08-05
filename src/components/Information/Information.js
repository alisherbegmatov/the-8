function Information () {
  return (
    <div id='Information' className="min-h-screen relative before:absolute before:top-0 before:left-0 before:opacity-50 before:bg-8 before:bg-no-repeat before:bg-cover before:content-[' '] before:w-full before:h-full flex ">
      <div className='pt-36 pl-12 z-40 opacity-100'>
        <video className='z-40' width='450' height='240' autoPlay muted>
          <source src={`${process.env.PUBLIC_URL}/Video/video.mp4`} type='video/mp4' />
        </video>
        <h3 className='text-white font-montserrat font-semibold tracking-8 mt-4'><span className='text-primary-light'>THOROUGHBRED</span> GENETICS</h3>
        <div className='w-36 py-[1px] my-2 bg-primary-light' />
        <p className='text-[#6B6C6C] font-montserrat w-60'>Within the headlamps of the long range GTE racing car lies its signature yellow</p>
      </div>
    </div>
  )
}

export default Information
