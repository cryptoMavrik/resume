import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavMenu from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <NavMenu>
      <Routes>
        <Route path='/' element={<Navigate to={"/profile"} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/portfolio' element={<>portfolio</>} />
        <Route path='/contact' element={<>contact</>} />
      </Routes>
    </NavMenu>
  );
}

export default App;
