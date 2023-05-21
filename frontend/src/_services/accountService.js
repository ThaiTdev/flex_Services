//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Authentification//
/////////////////////////////////////////////////////////////////////////////////////////////////////
let login = (data) => {
  return Axios.post("/login", data);
};

let logout = (id, data) => {
  return Axios.put(`/logoutUser/${id}`, data);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Professionnels//
/////////////////////////////////////////////////////////////////////////////////////////////////////
let createProfilPro = (data, id) => {
  return Axios.post(`/createProfilPro/${id}`, data);
};

let checkProfilValide = (id) => {
  return Axios.post(`/checkProfilValide/${id}`);
};
let showProfilePro = (id) => {
  return Axios.get(`/showProfilPro/${id}`);
};
let UpdateProfilPro = (data, id) => {
  return Axios.put(`/UpdateProProfil/${id}`, data);
};
let deleteProfilPro = (id) => {
  return Axios.delete(`/deleteProProfil/${id}`);
};

let uploadAvatarPro = (data, id) => {
  return Axios.post(`/uploadAvatarPro/${id}`, data);
};
let showGestionPro = (id) => {
  return Axios.post(`/showGestionPro/${id}`);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Restaurant//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let createNewResto = (data, id) => {
  return Axios.post(`/createNewResto/${id}`, data);
};
let uploadImageRestaurant = (data, id) => {
  return Axios.post(`/uploadImageResto/${id}`, data);
};
let ShowAllRestaurants = (id) => {
  return Axios.get(`/showallRestaurants/${id}`);
};
let ShowOneRestaurant = (id, idResto) => {
  return Axios.get(`/showOneRestaurant/${id}/${idResto}`);
};
let UpdateRestaurant = (data, id, idResto) => {
  return Axios.put(`/UpdateRestaurant/${id}/${idResto}`, data);
};
let updateImageRestaurant = (data, id, idResto) => {
  return Axios.post(`/updateImageRestaurant/${id}/${idResto}`, data);
};
let GetDataForOneRestaurant = (id, idResto) => {
  return Axios.get(`/GetDataForOneRestaurant/${id}/${idResto}`);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Customer//
/////////////////////////////////////////////////////////////////////////////////////////////////////
let createProfilCustomer = (data, id) => {
  return Axios.post(`/createProfilCustomer/${id}`, data);
};
let checkProfilCustomerValide = (id) => {
  return Axios.post(`/checkProfilCustomerValide/${id}`);
};
let showProfileCustomer = (id) => {
  return Axios.get(`/showProfileCustomer/${id}`);
};
let showCustomerCv = (id) => {
  return Axios.get(`/showCustomerCv/${id}`);
};
let UpdateProfilCustomer = (data, id) => {
  return Axios.put(`/UpdateCustomerProfil/${id}`, data);
};

let uploadAvatarCustomer = (data, id) => {
  return Axios.post(`/uploadAvatar/${id}`, data);
};

let uploadCvCustomer = (data, id) => {
  return Axios.post(`/uploadCvCustomer/${id}`, data);
};

///////////////////////////////////////////////////
//gestion des tokens///////////////////////////////
//////////////////////////////////////////////////
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

// let logout = () => {
//   localStorage.removeItem("token");
// };

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
  uploadAvatarPro,
  UpdateProfilPro,
  deleteProfilPro,
  showGestionPro,
  //Customers//
  createProfilCustomer,
  checkProfilCustomerValide,
  showProfileCustomer,
  UpdateProfilCustomer,
  uploadAvatarCustomer,
  uploadCvCustomer,
  showCustomerCv,
  //restaurant//
  createNewResto,
  uploadImageRestaurant,
  ShowAllRestaurants,
  ShowOneRestaurant,
  UpdateRestaurant,
  GetDataForOneRestaurant,
  updateImageRestaurant,
};
