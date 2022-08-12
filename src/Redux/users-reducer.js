const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Kirill",
      status: "my status1",
      city: "Moscow",
      country: "Russia",
    },
    {
      id: 2,
      followed: false,
      name: "Nikita",
      status: "my status2",
      city: "Moscow",
      country: "Russia",
    },
    {
      id: 3,
      followed: false,
      name: "Ashot",
      status: "my status3",
      city: "Moscow",
      country: "Russia",
    },
  ],
  newPostText: "Post text here",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: { ...state.users, ...action.users } };
    default:
      return state;
  }
};

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};
export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
