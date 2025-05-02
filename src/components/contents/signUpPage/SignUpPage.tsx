import './signUpPage.css';
import { useEffect } from 'react';

const LoginPage = () => {

  const signup = async () => {
    const nickname = document.getElementById('nicknameInput');

    const query = new URLSearchParams(window.location.search);
    const email = query.get('email');
    const provider = query.get('provider');
    const agreement = query.get('push') === '0' ? false : true;

    console.log('');
    console.log(nickname);
    console.log(query);
    // if (email === null) {
    //   window.location.href = '/';
    // } else {
    //   window.location.href = 'signup/agreement?email=' + email + '&' + 'provider=' + provider;
    // }
  }

  useEffect(() => {
    readQueryParam(); // 쿼리 파라미터를 읽어오는 함수를 실행
  }, []); 

  // 쿼리 파라미터를 읽어오는 함수
  const readQueryParam = () => {
    const query = new URLSearchParams(window.location.search);
    const email = query.get('email');
    const provider = query.get('provider');
  };

  return (
    <div id="loginPage">
      <div className='socialLoginBox'>
        <div className="title textCenter">회원 정보 입력</div>
        <div className='nickname'>
          <div className="nicknameTitle textCenter">닉네임</div>
          <input type='text' id='nicknameInput' />
        </div>
        <div className="signUpButton textCenter dragNo" onClick={signup}>회원가입</div>
      </div>
    </div>
  )
}

export default LoginPage