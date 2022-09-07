import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../Redux/auth-reducer";
import { headerAPI } from "../../API/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
