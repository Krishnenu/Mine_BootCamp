import './App.css';
import Home from './Container/Pages/Home';
import FallBack from './Container/Pages/FallBack';
import Contact from './Container/Pages/Contact';
import SearchJob from './Container/Pages/Search-Job';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<FallBack />} />
          <Route path="/search-job" element={<SearchJob/>} />
       </Routes>    
    </>
  );
}

export default App;
