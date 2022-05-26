import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  const [login, setLogin] = useState(true);

  const [isAlreadyExist, setIsAlreadyExist] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const onSubmit = (values) => {};

  const validationSchema = yup.object({
    name: yup.string().required("Required!!"),
    email: yup.string().email("Invalid email format").required("Required!!"),
    password: yup
      .string()
      .required("Required!!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  //Using useFormik hook for form validation
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function handleFormSubmit(e) {
    formik.handleSubmit(e);
    if (
      !formik.values.email ||
      !formik.values.password ||
      !formik.values.name
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      let ob = {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      };
      let olddata = localStorage.getItem("formdata");
      if (olddata == null) {
        olddata = [];
        olddata.push(ob);
        localStorage.setItem("formdata", JSON.stringify(olddata));
      } else {
        let oldArr = JSON.parse(olddata);
        if (oldArr.some((user) => user.email === formik.values.email)) {
          setIsAlreadyExist(!isAlreadyExist);
        } else {
          oldArr.push(ob);
          localStorage.setItem("formdata", JSON.stringify(oldArr));
          console.log(oldArr, "hhg");
          navigate("/login");
        }
      }
    }
  }

  return (
    <div className="container row">
      <div className="col-md-8  d-none d-sm-none d-md-block">
        <img
          src="https://thumbs.dreamstime.com/b/quiz-pop-website-test-isolated-human-wisdom-63221258.jpg"
          alt="Hello"
          style={{ width: "50vw", height: "100vh" }}
        ></img>
      </div>
      <div className="col-md-4" style={{ marginTop: "50px" }}>
        <div className="mb-5">
          <p className="h6 opacity-50">Start For Free</p>
          <p className="h2 text-center ">Sign Up to Quiz Creator</p>
          <span className="h6 opacity-50">Already a member?</span>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control bg-muted">
            <label htmlFor="name" className="form-label fw-bold opacity-75">
              Name
            </label>
            <input
              type="string"
              id="name"
              name="name"
              className="form-control bg-light mb-2"
              placeholder="Enter Your Full Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            ></input>
            <div className="error text-danger mb-2">
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>
            <label htmlFor="email" className="form-label fw-bold opacity-75">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control bg-light mb-2"
              placeholder="Enter Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            <div className="error text-danger mb-2">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <label htmlFor="password" className="form-label fw-bold opacity-75">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mb-2 bg-light "
              placeholder="Enter Password "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            <div className="form-error text-danger mt-0">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <div className=" mb-4 mt-4">
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg  col-12"
                >
                  Signup
                </button>
              </div>
            </div>
            {isAlreadyExist ? (
              <div className="text-danger text-center">
                {" "}
                !!!User Already Exist with this email id{" "}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
