//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////
let login = (data) => {
  return Axios.post("/login", data);
};

let register = (data) => {
  return Axios.post("/userCreate", data);
};

let emailConfirm = (activateCode) => {
  return Axios.post(`/emailConfirm/${activateCode}`);
};

let forgotPassword = (data) => {
  return Axios.post("/forgotPassword", data);
};
let resetPassword = (data, token) => {
  return Axios.post(`/resetPassword/${token}`, data);
};

///////////////////////////////////////////////////
//gestion des tokens///////////////////////////////
//////////////////////////////////////////////////
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");

  return !!token;
};

export const accountService = {
  login,
  register,
  saveToken,
  logout,
  isLogged,
  emailConfirm,
  forgotPassword,
  resetPassword,
};
