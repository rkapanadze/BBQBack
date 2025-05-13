import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Homepage from './pages/HomePage'



const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
  )
}

export default App
