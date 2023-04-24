import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </>
  );
}

export default App