import { sha256 } from 'js-sha256'
import http from './http'
import { LoginPost, LoginGet } from '../interface'

const endpoint = '/login'

export const LoginService = async (payload: LoginPost) => {
    const password = sha256(payload.password);
    var response = await http.Post(endpoint, undefined, {
      ...payload,
      password,
    });
    if (response.status === 200) {
        const data: LoginGet = await response.json();
        return data
    } else {
        return null
    }
}
