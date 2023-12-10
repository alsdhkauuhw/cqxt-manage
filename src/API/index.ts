import { post } from './requset';

const HttpManager = {
    //登录
    Signin: (username, password) => post(`/user/login/status`, {username, password}),
    checkUsername: (username) => post(`/user/signup/checkusername`, {username}),
    Signup: (email, name, username, password) => post(`/user/signup/insert`, {email, name, username, password}),
    checkEmail: (email) => post(`/user/signup/checkemail`, {email}),
    dailyCheckById: (userId) => post(`/daily/myspace/dailycheck`, {userId}) ,
    validToken: (id) => post(`/user/validToken`, {id}),
}

export {HttpManager} ;