import axios, { AxiosResponse } from "axios";
import { RequestProductsType } from "./response";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, //환경변수 활용
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProductsInfo = async (): Promise<
  AxiosResponse<RequestProductsType[]>
> => instance.get("/products");

// TODO: 나중에 로그인 구현하면 수정 필요
// // 요청 인터셉터
// instance.interceptors.request.use(
//   (config) => {
//     // 예: 토큰 추가
//     const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // 응답 인터셉터
// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // 예: 로그인 만료 처리
//       console.error('Unauthorized. Redirect to login?');
//     }
//     return Promise.reject(error);
//   }
// );
