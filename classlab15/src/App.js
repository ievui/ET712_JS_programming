import './App.css';
import flower from './images/flower.jpg';
import Home from './components/home';
import Contact from './components/contact';
import Navbars from './components/navbars';
import About from './components/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const username = 'user123';

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbars />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="App">
        <h1 style={{ color: 'darkblue', textAlign: 'center' }}>Aaliyah Fowlin</h1>
        <h2>Welcome to react JS {10 + 5}</h2>
        <p>Embedded variable</p>
        <p>{username} user has id number {10 + 5}</p>

        <figure>
          <img src={flower} alt="flower" />
        </figure>
      </div>
    </>
  );
}

export default App;
