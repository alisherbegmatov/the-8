import { useState } from 'react'
import { FiMinimize2 } from 'react-icons/fi'
import './modelBox.css'
function ModelBox ({ photo }) {
  const [boxes, setBoxes] = useState(document.getElementsByClassName('model-box'))
  function handleBack (e) {
    // add back hover
    window.location.href = '#Gallery'
    window.location.reload()
  }
  function handleClick (e) {
    const photos = document.getElementById('photos')
    const button = document.getElementsByClassName('minimize')
    const modelBox = document.getElementsByClassName('model-box')[0]
    modelBox.classList.add('flex-none')
    photos.classList.remove('px-56', 'py-20')
    // remove hover
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove('hover:-translate-y-12', 'hover:scale-110', 'hover:w-2/5', '-skew-x-[24deg]')
      boxes[i].classList.add('flex-none')
      boxes[i].style.width = '100vw'
      boxes[i].style.height = '100vh'
      button[i].style.display = 'block'
      setBoxes(...boxes, boxes[i])
    }
    e.target.scrollIntoView({ inline: 'center', block: 'center' })
  }
  return (
    <div
      className='model-box bg-center bg-no-repeat bg-cover -skew-x-[24deg] h-[65vh] w-1/5 first:w-2/5 transition ease-in-out delay-150 hover:-translate-y-12 hover:scale-110 hover:w-2/5'
      onClick={handleClick}
    >
      <div className='minimize text-primary-light text-4xl m-10 hidden' onClick={handleBack}><FiMinimize2 /></div>
    </div>
  )
}

export default ModelBox
