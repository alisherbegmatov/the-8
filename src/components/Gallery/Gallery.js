import ModelBox from './ModelBox'

function Gallery () {
  const photos = [26, 27, 28, 29]
  return (
    <div id='Gallery' className='Gallery min-h-screen flex justify-center items-center w-screen'>
      <div id='photos' className='w-screen px-56 py-20 flex gap-8 overflow-scroll mt-16 overflow-y-auto'>
        {photos.map((photo) => <ModelBox key='photo' photo={photo} />)}
      </div>
    </div>
  )
}

export default Gallery
