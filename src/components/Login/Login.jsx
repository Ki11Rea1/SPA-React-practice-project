import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../Utilities/Validators/validators";
import { Input } from "../common/FormControls/FormControls";
//redux-form is outdated, now using react-final-form. Migration recommended!

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
        Remember me
      </div>
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
    return formData;
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
