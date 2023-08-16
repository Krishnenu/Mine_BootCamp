import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import  Contacts  from '../src/pages/Contact'
import NoMatch from './pages/NoMatch';
import SearchJob from './pages/SearchJob';
import JobDetails from './pages/JobDeatils'

const App = () => {
 return (
    <>      
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
         <Route path='*' element={<NoMatch/>}></Route>
         <Route path='/Home/SearchJob' element={<SearchJob/>}></Route>
         <Route path='/Details/:id' element={<JobDetails/>}></Route>

       </Routes>
    </>
 );
};

export default App; 