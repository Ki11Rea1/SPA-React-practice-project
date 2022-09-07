import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "8146ef73-4a8a-4c4f-8c22-3ac5898b2bb9" },
});

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};
