import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from "../pages/navigation/Home";
import { Portfolio } from '../pages/navigation/PortfolioVideo';
import About  from '../pages/navigation/About'
// import Service  from '../pages/navigation/Portfoliophoto'

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfoliovideo' element={<Portfolio/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/portfoliophoto' element={<Service/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
