import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  requestSignUp = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({email, password})
    )

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
    .catch(alert)
  )

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  requestUserInfo = (token) => (
    superagent
    .get(`${API_HOST}/auth/me`)
    .set('Authorization', `token ${token}`)
    .then(res => {
      // console.log('requestUserInfo()')
      return res;
    })
  )

  getBoardsList = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )

  getBoard = (id) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
  )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  createBoard = (token, newBoard) => {
    superagent
    .post(`${API_HOST}/boards`)
    .set('Authorization', `token ${token}`)
    .send(newBoard)
    .then(res => {
      return res;
    });
  }

  createBookmark = (token, board_id, newBookmark) => {
    superagent
    .post(`${API_HOST}/boards/${board_id}/bookmarks`)
    .set('Authorization', `token ${token}`)
    .send(newBookmark)
    .then(res => {
      return res;
    });
  }

}

export default new Api();
