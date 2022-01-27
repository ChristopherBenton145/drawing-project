import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Draw from './components/Draw';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/draw' element={<Draw></Draw>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
