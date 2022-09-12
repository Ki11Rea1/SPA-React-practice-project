import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile } from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.showProfile(this.props.router.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { showProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
