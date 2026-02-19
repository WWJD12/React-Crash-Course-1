import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/users/:username' element={<Uusers />} />
      </Routes>
    </Router>
   
   );
   
}

export default App;
