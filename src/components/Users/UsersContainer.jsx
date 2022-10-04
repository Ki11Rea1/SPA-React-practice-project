import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers,
  changeUsersPage,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { pageNumber, pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.changeUsersPage(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
    changeUsersPage,
  })
)(UsersContainer);
