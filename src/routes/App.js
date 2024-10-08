import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from "../pages/navigation/Home";
import { Portfolio } from '../pages/navigation/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
