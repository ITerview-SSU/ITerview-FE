import axios from "axios";
import { BaseUrl } from "../privateKey";
// const instance = axios.create({ baseURL: BaseUrl, withCredentials: true });

// axios.defaults.withCredentials = false;

// export const requestLogin = async (email, password) => {
//     return await axios
//       ({
//           method: "post",
//           url: `${BaseUrl}/auth/login`,
//           data: JSON.stringify({
//             email,
//             password,
//           }),
//           headers: {
//             "Content-Type": "application/json; charset=utf-8",
//           },
//       }).then((res) => {
//           console.log(res);
//       }).catch ((err) => {
//           console.log(err);
//       })
//   };

  export const requestRefreshToken = async (accessToken, refreshToken) => {
    return await axios
    .post(`${BaseUrl}/auth/reissue`, {
      data: JSON.stringify({
        accessToken,
        refreshToken: localStorage.getItem(refreshToken),
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((res) => {
      console.log(res);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      localStorage.setItem('refreshToken', res.data['refreshToken']);
      alert("로그인 성공!")
    })
    .catch((err) => {
      console.log(err.res.data);
      alert("로그인 실패")
    });
  };

  export const checkAccessToken = async (refreshToken) => {
    if(axios.defaults.headers.common["Authorization"] === undefined) {
      return await requestRefreshToken(refreshToken).then((res) => {
        return res;
      });
    } else {
      return axios.defaults.headers.common["Authorization".split(" ")[1]];
    }
  }

  const instance = axios.create({ baseURL: BaseUrl});

  export const requestRole = (roleId) => instance.get(`/api/questions?category=${roleId}`);

  export const requestSearch = (search) => instance.get(`/api/search?keyword=${search}`);