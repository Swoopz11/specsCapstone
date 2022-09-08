import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login(props) {
  let navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  };

  function onSubmit(values) {
    axios.post("http://localhost:4000/login", values)
    .then((res) => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("name", res.data.name)
      props.logFunction()
      navigate('/home')
      })
    .catch((err) => {
        console.log(err);
      })  
  }

  function validate(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Password needs to be longer than 8 characters.";
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
