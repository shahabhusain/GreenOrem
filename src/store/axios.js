import axios from "axios";




let accessToken = localStorage.getItem("token");


console.log("access Token", accessToken)

export const axiosPrivateForm = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  headers: {
    "x-auth-token": accessToken,
    Accept: "application/json",
  },
});
;