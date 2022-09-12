import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile } from "../../Redux/profile-reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

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
    if (!this.props.isAuth) return <Navigate to={"/login"} />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { showProfile })(
  withRouter(ProfileContainer)
);
