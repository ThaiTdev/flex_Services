//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////

//Authentification//
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

//Professionnels//
let createProfilPro = (data, id) => {
  return Axios.post(`/createProfilPro/${id}`, data);
};

let checkProfilValide = (id) => {
  return Axios.post(`/checkProfilValide/${id}`);
};
let showProfilePro = (id) => {
  return Axios.get(`/showProfilPro/${id}`);
};
let upload = (data) => {
  return Axios.post(`/upload`, data);
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
  //tokens//
  logout,
  saveToken,
  isLogged,
  //Authentification//
  login,
  register,
  emailConfirm,
  forgotPassword,
  resetPassword,
  //Professionnels//
  createProfilPro,
  checkProfilValide,
  showProfilePro,
  upload,
  //Customer//
};
