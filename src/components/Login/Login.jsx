import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { required } from "../../Utilities/Validators/validators";
import { createField, Input } from "../common/FormControls/FormControls";
import { login } from "../../Redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css";
//redux-form is outdated, now using react-final-form. Migration recommended!

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        {
          type: "checkbox",
        },
        "Remember me"
      )}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
