import http from '../http';
import { useAppStore } from '@/store';
import { Response } from '@/types';
import API from '../api';

/**
 * 登录服务
 * @param username
 * @param password
 */
export async function login(
  username: string,
  password: string
): Promise<Response> {
  const appStore = useAppStore();
  return http
    .request(API.LOGIN, 'POST_JSON', { username, password })
    .then((res: any) => {
      const { message, code, data } = res.data;
      if (code === 0) {
        const { token, expires } = data;
        http.setAuthorization(token, expires);
        appStore.setLoginStatus(true);
      }
      return { code, message };
    });
}

/**
 * 注销登录服务
 */
export async function logout(): Promise<Response> {
  const appStore = useAppStore();
  return http.request(API.LOGOUT, 'POST_JSON').then((res) => {
    const { message, code } = res.data as Response;
    if (code === 0) {
      http.removeAuthorization();
      appStore.setLoginStatus(false);
    }
    return { message, code };
  });
}

/**
 * 获取路由配置
 */
export async function getRoutes(): Promise<Response> {
  return http.request(API.ROUTES, 'GET').then((res: any) => res.data);
}
