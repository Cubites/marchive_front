import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SNS_LOGIN_URI || "",
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // 로컬에서 refresh token 따로 저장한 경우 사용
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          await instance.post('/auth/refresh', null, {
            params: { refreshToken },
          });

          return instance(originalRequest);
        } catch (err) {
          window.location.href = '/login'; // 재로그인 유도
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;