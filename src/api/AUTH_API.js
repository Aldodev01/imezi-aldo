import { contextApi } from "./CONTEXT";

const token = localStorage.getItem("token");

export const AuthSignIn = async (data) => {
  try {
    const result = await contextApi("/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorizaton: `Bearer ${token}`,
      },

      data: data,
    });
    return result;
  } catch (error) {
    return error;
  }
};

// export const AuthSignUp = async (data) => {
//   try {
//     const result = await contextApi("/auth/signup", {
//       headers: {
//         "content-type": "application/json",
//         Authorizaton: `Bearer ${token}`,
//       },
//       data: data,
//     });
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

// const instance = axios.create({
//   // SERVICE LOKAL
//   // baseURL: 'http://192.168.18.41:2000',
//   // baseURL: "http://192.168.1.31:2000",

//   // SERVICE DEVELOPMENT
//   baseURL: "https://v1.imezi.com:2000",

//   // SERVICE PRODUCTION
//   // baseURL: "https://app.imezi.com:2000",

//   headers: {
//     // "access-control-allow-origin" : "*",
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
// });

// export default instance;