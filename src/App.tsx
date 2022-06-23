import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/Navbar';

function App() {
  return (
    <NavMenu>
      <Routes>
        <Route path='/' element={<>Hello World</>} />
        <Route path='/about' element={<>about</>} />
        <Route path='/portfolio' element={<>portfolio</>} />
        <Route path='/contact' element={<>contact</>} />
      </Routes>
    </NavMenu>
  );
}

export default App;
