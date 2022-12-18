import AxiosInstance from './Instance';

const LoginApi = {
  login: (body: LoginRequest) =>
    AxiosInstance.post<ResponseBody<LoginResponse>>('/login/consultant', body),
};

export default LoginApi;
