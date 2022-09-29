import { usersAPI } from "../API/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING_IN_PROGRESS";

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

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

export const changeUsersPage = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userID,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userID));
  let data = await apiMethod;
  if (data.resultCode === 0) {
    dispatch(actionCreator(userID));
  }
  dispatch(toggleFollowingProgress(false, userID));
};

export const follow = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userID,
      usersAPI.followUser(userID),
      followAccess
    );
  };
};

export const unfollow = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userID,
      usersAPI.unfollowUser(userID),
      unfollowAccess
    );
  };
};

export default usersReducer;
