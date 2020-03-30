import jwtDecode from "jwt-decode";
import {httpService} from "./http.service";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl 
const tokenKey = "token";

export const authService = {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt
};

async function login(email, password ,regType) {
  if(regType === 'Practitioner'){
    

    const {data: jwt} = await httpService.post(`${apiEndpoint}/practitioners/login`, {email, password});
    return jwt;
  }else{

    const {data: jwt} = await httpService.post(`${apiEndpoint}/login`, {email, password});
    return jwt;
}
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt).user;
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}
