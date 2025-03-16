import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signin from './pages/Signin'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="signin" element={<Signin />} />
              <Route path="/features" element={<h1>Features</h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>

          </main>
          <Footer />
        </div>


      </BrowserRouter>
    </>
  )
}

export default App
