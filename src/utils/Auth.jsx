import cookie from 'js-cookie';


export const setCookie = (key, value) => {
    cookie.set(key, value, {expires: 1});
};

export const removeCookie = (key) => {
    cookie.remove(key);
};

export const getCookie = (key) => {
    return cookie.get(key);
};

export const setAuthentication = (bearerToken) => {
  setCookie("bearerToken", bearerToken);
};

export const logOut = () => {
    removeCookie("bearerToken");
};

export const isLogin = async () => {
    const bearerToken = getCookie("bearerToken")
};