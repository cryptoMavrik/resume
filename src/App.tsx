import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import NavMenu from './components/Navbar';
import Profile from './pages/Profile';

export const Bubble1 = styled.div<{ top?: string, left?: string }>`
  position: absolute;
  z-index: -2;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(220 80% 55% / .4), hsl(220 50% 55% / .01) 70%, transparent 100%);
  height: 30rem;
  width: 30rem;
  top: ${({ top }) => top ? top : "0"};
  left: ${({ left }) => left ? left : "0"};
  `;

export const Bubble2 = styled.div<{ top?: string, left?: string }>`
  position: absolute;
  z-index: -3;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(230 80% 65% / .4), hsl(230 50% 65% / .01) 70%, transparent 100%);
  height: 45rem;
  width: 45rem;
  top: ${({ top }) => top ? top : "0"};
  left: ${({ left }) => left ? left : "0"};
  `;

export const Bubble3 = styled.div<{ top?: string, left?: string }>`
  position: absolute;
  z-index: -4;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(245 80% 65% / .4), hsl(240 50% 55% / .01) 70%, transparent 100%);
  /* background: radial-gradient(circle, hsl(220 50% 50% / .15), hsl(220 40% 50% / .01) 50%, #050710); */
  height: 60rem;
  width: 80rem;
  top: ${({ top }) => top ? top : "0"};
  left: ${({ left }) => left ? left : "0"};
`;


// export const Bubble2 = styled.div<{ top: string, left: string }>`
//   position: absolute;
//   z-index: 2;
//   border-radius: 50%;
//   background: radial-gradient(circle center, hsl(200 50% 50% / .25), hsl(200 50% 50% / .01) 20%, transparent 80%);
//   height: 60rem;
//   width: 60rem;
//   top: ${({ top }) => top ? top : "0"};
//   left: ${({ left }) => left ? left : "0"};
// `;

function App() {
  return (
    <NavMenu>
      <Bubble1 top={"0%"} left={"25%"} />
      <Bubble2 top={"10%"} left={"5%"} />
      <Bubble3 left={"25%"} />
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
