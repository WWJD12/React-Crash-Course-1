import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./components/Pages/Home.jsx";
import Nav from './components/Nav.jsx';
import Users from "./components/Pages/Users.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/users/:username' element={<Users />} />
      </Routes>
    </Router>
   
   );
   
}

export default App;
