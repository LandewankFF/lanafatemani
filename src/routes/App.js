import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from "../pages/navigation/Home";
import { Portfolio } from '../pages/navigation/Portfolio';
import About  from '../pages/navigation/About'
import Service  from '../pages/navigation/Service'

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
