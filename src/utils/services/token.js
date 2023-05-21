const TOKEN = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER = "user_data";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN);
  },

  getUserData() {
    return localStorage.getItem(USER);
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN, accessToken);
  },

  saveUserData(userData) {
    localStorage.setItem(USER, JSON.stringify(userData));
  },

  removeToken() {
    localStorage.removeItem(TOKEN);
  },

  removeUserData() {
    localStorage.removeItem(USER);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

export default TokenService;
