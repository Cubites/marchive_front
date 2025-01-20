import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div id='header'>
      <div className='top'>
        <div className='logo'>
          <Link to="/" className='jua-regular'>마카이브</Link>
        </div>
        <div className='loginbox'>
          <div className='loginButton'>
            로그인
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='menuButton'>캐릭터</div>
        <div className='menuButton'>아이템</div>
        <div className='menuButton'>도구</div>
        <div className='menuDetails'>
          <div>
            <Link to="/skill">스킬</Link>
            <Link to="/knight">특별조</Link>
          </div>
          <div>
            <Link to="/enchant">인챈트</Link>
            <Link to="/skill">염앰</Link>
            <Link to="/skill">가방</Link>
          </div>
          <div>
            <Link to="/skill">가방 조합</Link>
            <Link to="/skill">음악 버프 계산</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header