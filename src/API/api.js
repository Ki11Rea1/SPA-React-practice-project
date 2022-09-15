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
  followUser(userID) {
    return instance.post(`follow/${userID}`).then((response) => {
      return response.data;
    });
  },

  unfollowUser(userID) {
    return instance.delete(`follow/${userID}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
