import Header from './components/header/Header'
import BurgerMenu from './components/burgerMenu/BurgerMenu'
import Main from './components/main/Main'
import Gallery from './components/gallery/Gallery'
import Design from './components/Design/Design'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Creator from './components/Creator/Creator'
import Shape from './components/Shape/Shape'
import Performance from './components/Performance/Performance'
import Information from './components/Information/Information'
import Footer from './components/footer/Footer'
import './App.css'

function App () {
  return (
    <div className='App relative'>
      <Header />
      <BurgerMenu />
      <Main />
      <Creator />
      <Design />
      <NewsLetter />
      <Gallery />
      <Performance />
      <Shape />
      <Information />
      <Footer />
    </div>
  )
}

export default App
