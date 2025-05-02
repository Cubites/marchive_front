import { Link } from 'react-router-dom';
import './header.css';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectHeader, headerActions } from '../../store/header';
import axios from 'axios';

const Header = () => {
  const searchData = useAppSelector(selectHeader);
  const dispatch = useAppDispatch();

  const redirectOAuth2 = async (sns:string) => {
    let loginLink: string = process.env.REACT_APP_SNS_LOGIN_URI || "";
    const redirectURI: string = "http://marchive.test/login";
    
    loginLink += `/oauth2/authorization/${sns}?redirect_uri=` + redirectURI;
    
    window.location.href = loginLink;
  }

  return (
    <div id='header'>
      <div className="headerBox dragNo">

        <div className='mobileMenuButton'>
          <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -60px top 0px'}}/>
        </div>

        <Link to="/" className='mainLogo jua-regular'>마카이브</Link>

        <div className='menuBox'>

          <div className='menu'>
            <div className='menuTop fontCenter cursor'>
              <div className='menuName fontCenter'>캐릭터</div>
              <div className="arrow">
                <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -120px top 0px'}}/>
              </div>
            </div>
            <div className='menuBottom dragNo'>
              <Link to="/skill">스킬</Link>
              <Link to="/knight">특별조</Link>
            </div>
          </div>

          <div className='menu'>
            <div className='menuTop fontCenter cursor'>
              <div className='menuName fontCenter'>아이템</div>
              <div className="arrow">
                <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -120px top 0px'}}/>
              </div>
            </div>
            <div className='menuBottom dragNo'>
              <Link to="/enchant">인챈트</Link>
              <Link to="/dye">염앰</Link>
              <Link to="/bag">가방</Link>
            </div>
          </div>

          <div className='menu'>
            <div className='menuTop fontCenter cursor'>
              <div className='menuName fontCenter'>도구</div>
              <div className="arrow">
                <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -120px top 0px'}}/>
              </div>
            </div>
            <div className='menuBottom dragNo'>
              <Link to="/skill">가방 조합</Link>
              <Link to="/skill">음악 버프 계산</Link>
            </div>
          </div>

        </div>

        <div className='login'>
          <div className='loginTop'>
            <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -90px top 0px'}}/>
          </div>
          <div className='loginBottom dragNo'>
            <img src="/images/naver_login_btn.png" onClick={() => redirectOAuth2("naver")} />
            <img src="/images/kakao_login_btn.png" onClick={() => redirectOAuth2("keycloak")} />
          </div>
        </div>
        
      </div>      
    </div>
  );
}

export default Header