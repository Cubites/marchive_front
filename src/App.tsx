import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import TitlePage from './components/contents/titlePage/TitlePage';
import SkillPage from './components/contents/skillPage/SkillPage';
import KnightPage from './components/contents/knightPage/KnightPage';
import EnchantPage from './components/contents/enchantPage/EnchantPage';

function App() {
  return (
    <BrowserRouter>
      <div id='main'>
        <Header />
        <Routes>
          <Route path='/' element={<TitlePage />} index />
          <Route path='/skill' element={<SkillPage />} />
          <Route path='/knight' element={<KnightPage />} />
          <Route path='/enchant' element={<EnchantPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
