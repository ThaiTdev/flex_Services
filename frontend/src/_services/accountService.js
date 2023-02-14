//j'import mon parametrage Axios
import Axios from "../api/axios";

//gestion de ma connexion à la bdd
let login = (data) => {
  return Axios.post("/login", data);
};

let register = (data) => {
  return Axios.post("/userCreate", data);
};

let emailConfirm = (data, activateCode) => {
  return Axios.post(`/emailConfirm/${activateCode}`);
};

//gestion des tokens
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
};
