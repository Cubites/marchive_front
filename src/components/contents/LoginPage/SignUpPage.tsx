import './signUpPage.css';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { selectLogin, loginActions } from '../../../store/login';
import axios from 'axios';

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchData = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isNewUser = params.get('isNewUser');
    const nickname = params.get('nickname');

    if(isNewUser == "true") {
      alert("회원 가입이 완료되었습니다. \n닉네임은 마이페이지에서 수정할 수 있습니다.")
    }
    dispatch(loginActions.updateNickname(nickname));

    navigate('/');
  }, []);

  return (
    <div id="loginPage">
      로그인 처리 중...
    </div>
  );
}

export default SignUpPage