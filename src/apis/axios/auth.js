import { setTokenInStorage } from '../../utils/auth';
import { request } from './axios';

export const createAccount = async ({
  nickname,
  email,
  password,
  phoneNumber,
}) =>
  await request.post('/signup', {
    nickname,
    email,
    password,
    phoneNumber,
  });

export const createSocialAccount = async ({
  nickname,
  email,
  phoneNumber,
  provider,
}) =>
  await request.post('/signup/social', {
    nickname,
    email,
    phoneNumber,
    provider,
  });

export const chekcDuplicateNickname = async (nickname) => {
  let isValid, errorMessage;
  return await request
    .get('/check/nickname', {
      params: {
        nickname,
      },
    })
    .then((r) => {
      const data = r.data;

      if (data?.status === 'success') {
        isValid = true;
        errorMessage = '사용가능한 닉네임입니다.';
      }
      return {
        isValid,
        errorMessage,
      };
    })
    .catch((err) => {
      if (err.response.status === 409) {
        isValid = false;
        errorMessage = '이미 사용되고 있는 닉네임입니다.';
        return {
          isValid,
          errorMessage,
        };
      } else {
        console.error('chekcDuplicateNickname error', err);
      }
    });
};

export const chekcDuplicateEmail = async (email) => {
  let isValid, errorMessage;
  return await request
    .get('/check/email', {
      params: {
        email,
      },
    })
    .then((r) => {
      const data = r.data;

      if (data.status === 'success') {
        isValid = true;
        errorMessage = '사용가능한 이메일입니다.';
      }
      return {
        isValid,
        errorMessage,
      };
    })
    .catch((err) => {
      if (err.response.status === 409) {
        isValid = false;
        errorMessage = '이미 사용되고 있는 이메일입니다.';
        return {
          isValid,
          errorMessage,
        };
      } else {
        console.error('checkDuplicationEmail error', err);
      }
    });
};

export const login = async ({ email, password }) => {
  return request
    .post('/login', {
      email,
      password,
    })
    .then((r) => {
      if (r.data?.status === 'success') {
        setTokenInStorage(r.data.data.accessToken);
        return {
          isLoginFailed: false,
          message: '로그인에 성공했습니다.',
        };
      }
    })
    .catch((err) => {
      if (err.response.data.status === 'fail') {
        return {
          isLoginFailed: true,
          message: err.response.data.message,
        };
      } else {
        console.log('LOGIN_ERROR :', err);
        return {
          isLoginFailed: true,
          message: 'LOGIN ERROR',
        };
      }
    });
};

export const logout = async () =>
  await request.post('/logout').then((r) => {
    if (r.data.status === 'success') {
      localStorage.removeItem('accessToken');
    }
  });

//
// TODO: 해당 에러 핸들링 CODE 404
// JSON
// 토큰 값을 찾을 수 없는 경우
// {
// 	"status" : "fail",
// 	"message" : "이메일로 리프레쉬 토큰 값을 찾을 수 없습니다."
// }

// export const refreshToekn = (oldToken) => request.post('/reissue',)
