import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

function setConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function postLogin(userData) {
  return axios.post(`${URL}/signin`, userData);
}

function postUser(userData) {
  return axios.post(`${URL}/signup`, userData);
}

function getLoggedUser(token) {
  return axios.get(`${URL}/balances`, setConfig(token));
}

function postEntry(token, body) {
  return axios.post(`${URL}/balances`, body, setConfig(token));
}

function postLogout(token) {
  return axios.delete(`${URL}/signout`, setConfig(token));
}

export { postLogin, postUser, getLoggedUser, postEntry, postLogout };
