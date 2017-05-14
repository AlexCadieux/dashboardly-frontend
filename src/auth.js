import api from './api';

module.exports = {

  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in');
    }
    else {
      return api.requestLogin(email, pass)
      .then(res => {
        localStorage.token = res.body.token;
      });
    }
  },

  signUp(email, pass) {
    if (localStorage.token) {
      throw new Error('Already signed Up');
    }
    else {
      return api.requestSignUp(email, pass);
    }
  },

  userInfo() {
    return api.requestUserInfo(localStorage.token)
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
  },

  isLoggedIn() {
    return !!localStorage.token
  },

  newBoard(title, description) {
    var newBoard = {title: title, description: description};
    return api.createBoard(localStorage.token, newBoard)
  },

  newBookmark(title, url, description, boardId) {
    var newBookmark = {title: title, url: url, description: description};
    return api.createBookmark(localStorage.token, boardId, newBookmark)
  },

   boardInfo(boardId) {
    return api.getBoard(boardId);
  }

};
