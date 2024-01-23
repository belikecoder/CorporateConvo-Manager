import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Navbar from "./components/navbar";
import Register from "./pages/signup";
import Contact from "./pages/contact";
function App() {

  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>

    </>
     
  )
}

export default App
