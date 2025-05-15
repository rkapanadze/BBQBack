import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Homepage from './pages/HomePage'
import Footer from "./components/Footer";


const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
