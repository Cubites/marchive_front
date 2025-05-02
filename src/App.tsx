import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import TitlePage from './components/contents/titlePage/TitlePage';
import SkillPage from './components/contents/skillPage/SkillPage';
import KnightPage from './components/contents/knightPage/KnightPage';
import EnchantPage from './components/contents/enchantPage/EnchantPage';
import DyePage from './components/contents/dyePage/DyePage';
import BagPage from './components/contents/bagPage/BagPage';
import SignUpPage from './components/contents/signUpPage/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id='main'>
        <Routes>
          <Route path='/' element={<TitlePage />} index />
          <Route path='/skill' element={<SkillPage />} />
          <Route path='/knight' element={<KnightPage />} />
          <Route path='/enchant' element={<EnchantPage />} />
          <Route path='/dye' element={<DyePage />} />
          <Route path='/bag' element={<BagPage />} />
          <Route path='/login' element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
