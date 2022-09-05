import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import setAuthUserData from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        debugger;
        if (response.data.resultCode === 0) {
          let { email, id, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
