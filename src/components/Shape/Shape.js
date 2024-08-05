function Shape () {
  return (
    <div className="min-h-screen relative before:absolute before:top-0 before:left-0 before:opacity-50 before:bg-5 before:bg-no-repeat before:bg-cover before:content-[' '] before:w-full before:h-full flex items-center justify-end">
      <div className='flex flex-col px-60 justify-around mt-72 w-[60vw] z-40'>
        <h1 className='text-white font-serif font-semibold text-4xl'>The 8 opens a new chapter in BMW design language</h1>
        <span className='text-xl text-white mt-8'>Adrian van Hooydonk</span>
        <span className='text-sm text-primary-light'>Head of BMW Group Design</span>
      </div>
    </div>
  )
}

export default Shape
