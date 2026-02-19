import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import HomeHeader from './components/Home Header/HomeHeader'
import Models from './components/3D models/3DModels'
import BackToTop from './components/Back To Top/BackToTop'
import MobileMenu from './components/Mobile Menu/MobileMenu'
import Footer from './components/Footer/Footer'
import AboutUs from './components/About Us/AboutUs'
import Header from './components/Header/Header'
import { useLocation } from 'react-router-dom'

const App = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <div className="App">
            {isHomePage ? <HomeHeader /> : <Header />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/tinting" element={<Models />} />
            </Routes>

            <BackToTop />
            <MobileMenu />
            <Footer />
        </div>
    )
}

export default App
