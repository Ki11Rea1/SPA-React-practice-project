import { usersAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.usersNumber };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };

    default:
      return state;
  }
};

export const followAccess = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};
export const unfollowAccess = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    usersNumber: totalUsersCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleFollowingProgress = (isFetching, userID) => {
  return {
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userID,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const changeUsersPage = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.followUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.unfollowUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export default usersReducer;
