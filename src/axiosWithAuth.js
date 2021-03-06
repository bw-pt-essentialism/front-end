import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: "https://db-essentialism.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
