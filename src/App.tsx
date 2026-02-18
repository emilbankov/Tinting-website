import Home from './components/Home/Home'
import HomeHeader from './components/Home Header/HomeHeader'
import TintingPage from './components/TintingPage'
import BackToTop from './components/Back To Top/BackToTop'
import MobileMenu from './components/Mobile Menu/MobileMenu'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <HomeHeader />
      <Home />
      {/* <TintingPage /> */}
      <BackToTop />
      <MobileMenu />
      <Footer />
    </div>
  )
}

export default App
